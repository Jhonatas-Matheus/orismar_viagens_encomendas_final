import styled from "styled-components";
import { motion } from "framer-motion";

export const StyledSection = styled(motion.section)`
  h2 {
    font-size: 2em;
    color: #eb7305;
  }
  p {
    line-height: 1.5em;
  }
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 30em;
  margin-top: 2em;
  font-family: "Chelsea Market", cursive;
  gap: 2em;
  padding: 2em 1em;
  @media (min-width: 1024px) {
    padding: 2em 4em;
  }
  background-color: rgba(0, 0, 0, 0.7);
  color: white;
  box-sizing: border-box;
`;
export const SectionHome = styled(StyledSection)`
  div {
    display: flex;
    flex-direction: column;
    gap: 1em;
    align-items: center;
    width: 100%;
    height: 100%;
    /* background-color: red; */
    box-sizing: border-box;
    .column-one {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }
    .column-two {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      min-height: 100% !important;

      a {
        color: white;
        padding: 1em 2em;
        border-radius: 10px;
        background-color: #eb7305;
        text-decoration: none;
      }
    }
    p {
      width: 100%;
      text-align: justify;
      span {
        color: #eb7305;
      }
    }
  }
  @media (min-width: 1024px) {
    div {
      flex-direction: row;
      gap: 0em;
      .column-one {
        width: 50%;
      }
      .column-two {
        width: 50%;
      }
    }
  }
`;
export const SectionAboutUs = styled(StyledSection)``;
export const SectionSchedule = styled(StyledSection)`
  div {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 100%;
    @media (min-width: 768px) {
      padding: 0 2em;
    }
    .column-one {
      p {
        width: 100%;
      }
    }
    gap: 2em;
    flex-direction: column;
    @media (min-width: 768px) {
      flex-direction: row;
      justify-content: space-between;
      .column-one {
        align-self: center;
      }
    }

    div {
      width: 100%;
      @media (min-width: 768px) {
        flex-basis: 50%;
      }
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100%;
      box-sizing: border-box;
      form {
        display: flex;
        width: 100%;
        @media (min-width: 1024px) {
          width: 70%;
          padding: 0 1.5em;
        }
        align-items: center;
        flex-direction: column;
        box-sizing: border-box;
        gap: 1em;
        label {
          display: flex;
          flex-direction: column;
          gap: 0.5em;
          width: 100%;
          input {
            padding: 1em;
            border-radius: 10px;
            border: none;
          }
          &:last-child {
            input {
              padding: 1em;
              background-color: #eb7305;
              cursor: pointer;
            }
          }
        }
      }
    }
  }
`;
export const SectionCars = styled(StyledSection)``;
