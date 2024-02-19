import { Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
import GameGrid from "./components/GameGrid";
import GenreList from "./components/GenreList";
import { useState } from "react";
import { Genre } from "./hooks/useGenres";
function App() {
  const [genreDisplayed, setGenreDisplayed] = useState<Genre | null>(null);
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
        <GridItem area={"aside"} paddingX={5}><GenreList selectedGenre={genreDisplayed} handleClick={(genre) => setGenreDisplayed(genre)}></GenreList></GridItem>
      </Show>
      <GridItem area={"main"}>
        <GameGrid GenreDisplayed={genreDisplayed}></GameGrid>
      </GridItem>
    </Grid>
  );
}

export default App;
