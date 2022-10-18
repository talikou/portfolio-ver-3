import React from "react";
import * as ReactDOM from "react-dom/client";

// UI
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";

// components
import App from "./App";

const container = document.getElementById("root");
const root = ReactDOM.createRoot(container);

root.render(
  <ChakraProvider>
    <ColorModeScript initialColorMode="light" />
    <App />
  </ChakraProvider>
);
