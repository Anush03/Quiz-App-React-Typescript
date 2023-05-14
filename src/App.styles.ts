import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
    background-color: 	#808080;
    background-size: cover;
    margin: 0;
    padding: 0 20px;
    display: flex;
    justify-content: center;
  }

  * {
    font-family: Tahoma, sans-serif;
    box-sizing: border-box;
    text:bold;
    color: #FFFFFF;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  > p {
    color: #000000;
  }

  .score {
    color: #fff;
    font-size: 2rem;
    margin: 0;
  }

  h1 {
    font-family: Tahoma, sans-serif;
    font-weight: 500;
    background-size: 100%;
    // filter: drop-shadow(2px 2px #0085a3);
    font-size: 70px;
    color: #000000;
    text-align: center;
    margin: 20px;
  }

  .start,
  .next {
    cursor: pointer;
    //  background: linear-gradient(180deg, #ffffff, #ffcc91);
    border: 2px solid #d38558;
    //  box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.25);

    border-radius: 10px;
    height: 40px;
    margin: 20px 0;
    padding: 0 40px;
    background-color: #0a0a23;
    color: #fff;
    box-shadow: 0px 0px 2px 2px rgb(0, 0, 0);
  }

  .start {
    max-width: 200px;
  }
`;
