import React from "react";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import theme from "./theme.ts";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.initialColorMode} />
      <App />
    </ChakraProvider>
  </React.StrictMode>
);
