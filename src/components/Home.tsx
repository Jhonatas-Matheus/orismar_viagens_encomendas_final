import React from "react";
import Typography from "../styles/Typography";
import { SectionHome, StyledSection } from "./styles/Section";
import { motion } from "framer-motion";

type Props = {};

const Home = (props: Props) => {
  return (
    <SectionHome
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 1 }}
    >
      <Typography tag="h2">Inicio</Typography>
      <div>
        <motion.div
          animate={{ y: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="column-one"
        >
          <p>
            <span>Bem-vindo</span> à Orismar Viagens e Encomendas, sua empresa
            de transporte de passageiros de confiança. Nós entendemos a
            importância de chegar ao seu destino com segurança e comodidade, e
            por isso nos esforçamos para oferecer um serviço de alta qualidade.
            Com veículos modernos e uma equipe profissional e dedicada,
            garantimos uma viagem tranquila e sem preocupações. Além disso,
            nossa empresa também oferece serviços de encomendas, permitindo que
            você transporte suas cargas com segurança e rapidez. Não perca mais
            tempo e reserve já sua viagem conosco! A Orismar Viagens e
            Encomendas está pronta para lhe levar ao seu destino.
          </p>
        </motion.div>
        <motion.div
          animate={{ x: [100, 0], opacity: [0, 1] }}
          transition={{ duration: 2 }}
          className="column-two"
        >
          <motion.a
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.8 }}
            href="#schedule"
          >
            Agende sua viagem
          </motion.a>
        </motion.div>
      </div>
    </SectionHome>
  );
};

export default Home;
