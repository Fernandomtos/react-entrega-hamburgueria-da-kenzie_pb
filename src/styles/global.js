import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
    list-style: none;
  }
  
  :root {
    --color-primary: #27ae60;
    --color-primary-50: #93d7af;
    --color-secondary: #eb5757;
    --grey-100: #333333;
    --grey-50: #828282;
    --grey-20: #e0e0e0;
    --grey-0: #f5f5f5;
  
    --feedback-negative: #e60000;
    --feedback-warning: #ffcd07;
    --feedback-sucess: #168821;
    --feedback-information: #155bcb;
  
    --headline1: 1.625rem;
    --headline2: 1.375rem;
    --headline3: 1.125rem;
    --headline4: 0.875rem;
    --headline: 1rem;
    --body: 0.875rem;
    --caption: 0.75rem;
  }
  
  body {
    width: 100vw;
    height: 100vh;
  }

  main {
    padding: 15px;
    font-family: "Inter", sans-serif;
  }
  
  button {
    cursor: pointer;
    border-radius: 8px;
  }

  @media (min-width: 769px) {
    main {
      width: 100%;
      height: 772px;
      padding-top: 31px;
      padding-left: 7.99%;
      padding-right: 7.99%;
      display: flex;
      gap: 2%;
    }
  }

`;
