import styled from "styled-components"

export const RedButton = styled.button`
  width: max-content;
  height: 5vw;
  padding: 0.5em 1.5em 0.5em 1.5em;
  border: none;
  border-radius: 50px;
  font-size: 1.7vw;
  font-family: "Lobster", cursive;
  color: white;
  background-color: #e64d4d;
  transition: all ease-in-out 250ms;
  :hover {
    background-color: #eb7070;
    transform: translateY(-0.2em);
    cursor: pointer;
  }
  :active {
    background-color: #e64d4d;
    transform: translateY(0.1em);
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 12vw;
    font-size: 6vw;
    padding: 2vw 5vw 2vw 5vw;
  }
  //tablets
  @media screen and (min-width: 481px) and (max-width: 912px) {
    height: 12vw;
    font-size: 6vw;
    padding: 2vw 5vw 2vw 5vw;
  }
`
