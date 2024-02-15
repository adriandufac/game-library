import { Button, ButtonGroup, Grid, GridItem, Show } from "@chakra-ui/react";
import NavBar from "./components/NavBar";
function App() {
  return (
    <Grid
      templateAreas={{
        base: `"nav" " main"`,
        lg: `"nav nav" "aside main"`,
      }} // Gestion du responsive par chakra => on veut cacher aside sur les écran qui ne sont pas larges
    >
      <GridItem area={"nav"}>
        <NavBar></NavBar>
      </GridItem>
      <Show above="lg">
        <GridItem area={"aside"} bg="gold">
          Aside
        </GridItem>
      </Show>
      <GridItem area={"main"} bg="dodgerblue">
        Main
      </GridItem>
    </Grid>
  );
}

export default App;
