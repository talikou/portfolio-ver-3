// UI
import { VStack } from "@chakra-ui/react";

// screens
import About from "./screens/About";
import Profile from "./screens/Profile";
import Social from "./screens/Social";
import Header from "./screens/Header";

function App() {
  return (
    <VStack p={5}>
      <Header />
      <About />
      <Social />
      <Profile />
    </VStack>
  );
}

export default App;
