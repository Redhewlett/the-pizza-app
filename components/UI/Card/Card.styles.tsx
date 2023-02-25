import styled from "styled-components"

export const WhiteCard = styled.div.attrs((props) => ({ className: props.className }))`
  width: 19vw;
  height: max-content;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 10px 5px rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  background-color: white;
  img {
    width: 100%;
    height: 40vh;
    object-fit: cover;
  }
  .step {
    margin-top: 2em;
    font-size: 1.2vw;
    text-align: center;
    font-family: "Merriweather", trebuchet;
    font-weight: bold;
  }
  .home-step {
    margin-top: 1em;
  }
  .topping-list {
    padding: 0;
    width: 90%;
    font-size: 0.9vw;
    list-style: none;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0.4em;
  }
  .stepCount {
    width: 3em;
    height: 3em;
    display: flex;
    position: relative;
    top: 1vw;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    background-color: var(--green);
    color: white;
  }
  .stepCount img {
    width: 2vw;
    height: 2vw;
  }
  .stepElements {
    width: 100%;
    height: 42vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 0em 1.5em;
  }
  .stepElements img {
    width: 6vw;
    height: 6vw;
  }
  .stepElements div:hover {
    transform: translateY(-0.4em);
    transition: all ease-in-out 250ms;
  }
  .dough > .knead {
    width: 3vw;
    height: 3vw;
  }
  .toppings div > img {
    width: 3vw;
    height: 3vw;
  }
  .toppings {
    height: 44vh;
    padding: 1em;
    overflow: auto;
  }
  /* scroll */
  .toppings::-webkit-scrollbar {
    display: none;
    /* width: 0.5em; */
  }

  .mantine-Tooltip-root {
    position: relative;
  }

  .minus {
    width: 1vw;
    height: 1vw;
    border-radius: 50%;
    color: white;
    background-color: var(--green);
    justify-content: center;
    align-items: center;
    position: absolute;
    top: 0;
    left: 0;
    display: none;
  }

  .minus-selected {
    display: flex;
  }

  @media screen and (min-width: 320px) and (max-width: 480px) {
    width: 85vw;
    img {
      height: 15vh;
    }
    .stepCount {
      width: 10vw;
      height: 10vw;
      top: 4vw;
    }
    .stepCount img {
      width: 9vw;
      height: 9vw;
    }
    .step {
      margin-top: 2vw;
      font-size: 4vw;
    }
    .stepElements {
      height: 15vh;
      gap: 0em 1.5em;
    }
    .stepElements div:hover {
      transform: translateY(0em);
    }
    .stepElements img {
      width: 15vw;
      height: 15vw;
    }
    .dough > .knead {
      width: 10vw;
      height: 10vw;
    }
    .toppings {
      height: 25vh;
    }
    .toppings div > img {
      width: 12vw;
      height: 12vw;
    }
    .minus {
      width: 5vw;
      height: 5vw;
      left: -2vw;
    }
  } //tablets
  @media screen and (min-width: 481px) and (max-width: 912px) {
    width: 85vw;
    img {
      height: 20vh;
      object-position: 100% 45%;
    }
    .stepCount {
      width: 10vw;
      height: 10vw;
      top: 4vw;
      font-size: 4vw;
    }
    .stepElements div:hover {
      transform: translateY(0em);
    }
    .stepCount img {
      width: 8vw;
      height: 8vw;
    }
    .step {
      margin-top: 1vw;
      font-size: 4vw;
    }
    .stepElements {
      height: 15vh;
      gap: 0em 1.5em;
    }
    .stepElements img {
      width: 15vw;
      height: 15vw;
    }
    .dough > .knead {
      width: 10vw;
      height: 10vw;
    }
    .toppings {
      height: 27vh;
    }
    .toppings div > img {
      width: 15vw;
      height: 15vw;
    }
    .minus {
      width: 5vw;
      height: 5vw;
      left: -2vw;
    }
  }
`
