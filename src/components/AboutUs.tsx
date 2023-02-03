import React from "react";
import Typography from "../styles/Typography";
import { SectionAboutUs } from "./styles/Section";

type Props = {};

const AboutUs = (props: Props) => {
  return (
    <SectionAboutUs>
      <Typography tag="h2">Sobre nós</Typography>
      <div>
        <div>
          <p>
            A Orismar Viagens e Encomendas é uma empresa sólida e experiente no
            transporte de passageiros e encomendas. Fundada há mais de 10 anos,
            temos como objetivo oferecer a nossos clientes um serviço de alta
            qualidade e segurança, sempre buscando superar as expectativas. Nós
            valorizamos a satisfação de nossos clientes e por isso investimos em
            veículos modernos e tecnológicos, bem como em uma equipe de
            profissionais altamente capacitados e dedicados. Acreditamos que a
            qualidade do atendimento e a satisfação dos clientes são as
            principais prioridades em nossa empresa. Conte com a Orismar Viagens
            e Encomendas para suas viagens e encomendas, garantimos um serviço
            de excelência!
          </p>
        </div>
        <div></div>
      </div>
    </SectionAboutUs>
  );
};

export default AboutUs;
