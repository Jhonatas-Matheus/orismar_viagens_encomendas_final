import React, { useState } from "react";

import Container from "./components/Container";
import { encode } from "punycode";
import { delay, motion } from "framer-motion";
import Typography from "./styles/Typography";
import Main from "./pages/Main";

function App() {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <div className="App">
      <Main />
    </div>
  );
}

export default App;
