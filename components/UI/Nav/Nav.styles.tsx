import styled from 'styled-components'

export const NavBar = styled.div`
  width: 100vw;
  height: 8vh;
  background: var(--red);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 2em 0 3em;
  h1 {
    letter-spacing: 0.1em;
    font-size: 2.5vw;
  }
  .titleLink {
    color: white;
    text-decoration: none;
  }
  ul {
    width: 25%;
    display: flex;
    list-style: none;
    justify-content: space-between;
    gap: 0.5em;
  }
  li a {
    display: flex;
    align-items: center;
    gap: 0.2em;
    color: white;
    font-size: 1.5vw;
    text-decoration: none;
    transition: all ease-in-out 250ms;
  }
  li a:hover {
    color: var(--green);
  }
  li a:hover svg {
    fill: var(--green);
  }
  svg {
    width: 1em;
    height: 1em;
    margin-right: 0.2em;
    fill: white;
    transition: all ease-in-out 250ms;
  }
  .active {
    color: white;
    text-decoration: underline;
  }
  .active > svg {
    fill: var(--green);
  }
  //phones
  @media screen and (min-width: 280px) and (max-width: 480px) {
    h1 {
      font-size: 6vw;
    }
    li a {
      font-size: 6vw;
    }
    ul {
      justify-content: space-around;
      gap: 0em;
    }
  }
  //tablets
  @media screen and (min-width: 481px) and (max-width: 912px) {
    justify-content: space-between;
    h1 {
      font-size: 4vw;
    }
    li a {
      font-size: 3.5vw;
    }
    ul {
      width: 50vw;
    }
  }
`
