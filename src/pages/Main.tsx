import React from "react";
import Navbar from "../components/Navbar";
import { StyledMain } from "../styles/StyledMain";
import Typography from "../styles/Typography";
import { motion } from "framer-motion";
import Home from "../components/Home";
import Schedule from "../components/Schedule";
import Cars from "../components/Cars";
import AboutUs from "../components/AboutUs";

type Props = {};

const Main = (props: Props) => {
  return (
    <StyledMain>
      <Navbar />
      <motion.div
        className="main-title"
        animate={{ x: [-2000, 200, 0] }}
        transition={{ duration: 1 }}
      >
        <Typography tag="h1">Orismar Viagens e Encomendas</Typography>
        <Typography tag="h2">
          Viage com o conforto e segurança que você merece
        </Typography>
      </motion.div>
      <Home />
      <AboutUs />
      <Cars />
      <Schedule />
    </StyledMain>
  );
};

export default Main;
