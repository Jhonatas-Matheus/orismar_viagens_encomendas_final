import React from "react";
import { StyledTitle, StyledTitle2, StyledTitle3 } from "./StyledTypography";

type Props = {
  tag: "h1" | "h2" | "h3" | "h4";
  children: React.ReactNode;
};

const Typography = ({ tag, children }: Props) => {
  return (
    <>
      {tag === "h1" && <StyledTitle>{children}</StyledTitle>}
      {tag === "h2" && <StyledTitle2>{children}</StyledTitle2>}
      {tag === "h3" && <StyledTitle3>{children}</StyledTitle3>}
    </>
  );
};

export default Typography;
