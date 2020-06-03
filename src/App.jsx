import React from "react";

/* Components */
import NotFound from "./pages/NotFound";
import Header from "./react-components/Header";

/* Styles */
import { GlobalStyle } from "./styles/global";

const App = () => {
   return(
      <>
         <Header />
         <NotFound/>
         <GlobalStyle />
      </>
   )
}

export default App;