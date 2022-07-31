import { createGlobalStyle, css } from 'styled-components'

const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 300;
    font-display: swap;
    src: local('SfPro Thin'), local('SfPro-Thin'),
        url('../assets/fonts/thin.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 400;
    font-display: swap;
    src: local('SfPro Regular'), local('SfPro-Regular'),
        url('../assets/fonts/regular.woff2') format('woff2');
  }
  @font-face {
    font-family: 'SfPro';
    font-style: normal;
    font-weight: 600;
    font-display: swap;
    src: local('SfPro Bold'), local('SfPro-Bold'),
        url('../assets/fonts/bold.woff2') format('woff2');
  }
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  ${({ theme }) => css`
    html {
      font-size: 62.5%;
      background-color: ${theme.colors.mainBg};
      color: ${theme.colors.lightGray};
    }
    body {
      font-family: ${theme.font.family};
      font-size: ${theme.font.sizes.medium};
    }
  `}
`

export default GlobalStyles
