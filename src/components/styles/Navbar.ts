import styled from "styled-components";

export const StyledNavbar = styled.nav`
  display: flex;
  font-family: "Chelsea Market", cursive;
  font-size: 0.9em;
  width: 100%;
  justify-content: center;
  @media (min-width: 1024px) {
    justify-content: end;
  }
  padding: 0 6em;
  /* background-color: blue; */
  height: 3em;
  ul {
    display: flex;
    gap: 2em;
    align-items: center;
    height: 100%;
    /* background-color: red; */
    li:hover {
      a {
        color: #eb7305;
        transition: 0.5s;
      }
    }
    a {
      color: white;
      text-transform: none;
      text-decoration: none;
    }
  }
`;
