import React from "react";
import { StyledNavbar } from "./styles/Navbar";

type Props = {};

const Navbar = (props: Props) => {
  return (
    <StyledNavbar>
      <ul>
        <li>
          <a href="">Inicio</a>
        </li>
        <li>
          <a href="">Sobre</a>
        </li>
        <li>
          <a href="">Frota de carros</a>
        </li>
        <li>
          <a href="">Agende sua viagem</a>
        </li>
        <li>
          <a href="">Feedback</a>
        </li>
        <li>
          <a href="">Contato</a>
        </li>
      </ul>
    </StyledNavbar>
  );
};

export default Navbar;
