// global.js
// Source: https://github.com/maximakymenko/react-day-night-toggle-app/blob/master/src/global.js#L23-L41

import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *,
  *::after,
  *::before {
    box-sizing: border-box;
  }

  body {
    align-items: center;
    background: ${({ theme }) => theme.body};
    color: ${({ theme }) => theme.text};

    transition: all 0.25s linear;
  }
  .beer-buttons{
         background: ${({ theme }) => theme.beerBtnBg};
        color: ${({ theme }) => theme.beerBtnText};
  } 
 .CartNotifications .logo-dark{
            fill: ${({ theme }) => theme.text};

  }

  .popup-box{
    color: black;
  }
  .back-shop,.back-arrow,.up,.down{
                color: ${({ theme }) => theme.text};
                                fill: ${({ theme }) => theme.text};


  }
  `;
