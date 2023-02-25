import styled from "styled-components"

export const GutterBar = styled.div`
  width: 100vw;
  height: 10vh;
  color: var(--grey);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  h2 {
    font-size: 2vw;
  }
  h3 {
    font-size: 1vw;
    font-weight: 300;
  }
  @media screen and (min-width: 320px) and (max-width: 480px) {
    height: 12vh;
    padding: 1em;
    h2 {
      font-size: 5vw;
    }
    h3 {
      font-size: 4.5vw;
      text-align: center;
    }
  }
  //tablets
  @media screen and (min-width: 481px) and (max-width: 912px) {
    height: 15vh;
    padding: 1em;
    h2 {
      font-size: 5vw;
    }
    h3 {
      font-size: 3.7vw;
      text-align: center;
    }
  }
`
