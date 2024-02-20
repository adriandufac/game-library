import { Grid, GridItem, HStack, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
import PlatformSelector from "./components/PlatformSelector";
import { Platform } from "./hooks/usePlatforms";
import SortSelector from "./components/SortSelector";

export interface GameQuery {
  genre : Genre | null;
  platform : Platform | null;
  sort : string
}

function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }}  // Gestion du responsive par chakra => on veut cacher aside sur les écran qui ne sont pas larges
      templateColumns={{
        base : "1fr",
        lg: "200px 1fr"  // sur ecran large, la premiere colonne prend 100 px et la deuxieme tout le reste
      }}
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} paddingX={5}><GenreList selectedGenre={gameQuery.genre} handleClick={(genre) => setGameQuery({...gameQuery,genre})}></GenreList></GridItem>
      </Show>
      <GridItem area={"main"}>
      <HStack spacing={5} paddingLeft={2} marginBottom={5}>
        <PlatformSelector  selectedPlatform = {gameQuery.platform} handlePlatformSelection={(platform) => setGameQuery({...gameQuery,platform})}></PlatformSelector>
        <SortSelector selectedOrder = {gameQuery.sort} handleClick={(sort) => setGameQuery({...gameQuery,sort})}></SortSelector>
      </HStack>
        
        <GameGrid gameQuery={gameQuery}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
