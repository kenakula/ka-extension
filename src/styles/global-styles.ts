import { createGlobalStyle } from 'styled-components';

export const NewTabGlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    display: flex;
    margin: 0;
    min-height: 100dvh;
    font-size: 16px;
    background: linear-gradient(180deg, #383b43 0%, #23262d 70%);
    color: aliceblue;
  }

  #__plasmo {
    display: flex;
    width: 100%;

    & > div {
      display: flex;
      width: 100%;
    }
  }
`;

export const PopupGlobalStyles = createGlobalStyle`
  *,
  *::before,
  *::after {
    box-sizing: inherit;
  }

  html {
    box-sizing: border-box;
  }

  body {
    display: flex;
    margin: 0;
    min-height: 100dvh;
    font-size: 16px;
    background: #23262d;
    color: aliceblue;
  }

  #__plasmo {
    display: flex;
    width: 100%;

    & > div {
      display: flex;
      width: 100%;
    }
  }
`;