import React from "react";
import { StyledContainer } from "./styles/Container";

type Props = {
  children: React.ReactNode;
};

const Container = ({ children }: Props) => {
  return <StyledContainer>{children}</StyledContainer>;
};

export default Container;
