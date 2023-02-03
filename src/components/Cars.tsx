import React from "react";
import Typography from "../styles/Typography";
import { SectionCars } from "./styles/Section";

type Props = {};

const Cars = (props: Props) => {
  return (
    <SectionCars>
      <Typography tag="h2">Frota de carros</Typography>
      <div>
        <div>
          <p>
            A frota da Orismar Viagens e Encomendas é composta por veículos
            modernos e equipados com as mais recentes tecnologias de segurança e
            conforto. Oferecemos uma ampla gama de opções de transporte, desde
            carros compactos até ônibus de grande capacidade, para atender às
            necessidades de nossos clientes. Todos os nossos veículos passam por
            rigorosos testes de manutenção e inspeção antes de cada viagem,
            garantindo a segurança e confiabilidade de nossos serviços. Além
            disso, nossos motoristas são altamente qualificados e possuem anos
            de experiência no transporte de passageiros. Com a Orismar Viagens e
            Encomendas, você pode viajar com tranquilidade, sabendo que está em
            boas mãos.
          </p>
        </div>
        <div>{/* Aqui vai entrar o carrossel */}</div>
      </div>
    </SectionCars>
  );
};

export default Cars;
