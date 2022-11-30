import { createGlobalStyle } from 'styled-components';

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html,
  body,
  #root {
    padding: 0;
    margin: 0;
    height: 100%;
    position: relative;
  }
  ::-webkit-scrollbar {
    width: 0px;
    height: 0px;
  }

  /* .aws-btn {
    --button-default-border-radius: 11px;
  } */
`;
