import { createGlobalStyle } from 'styled-components'


const GlobalStyle = createGlobalStyle`
  *{
    margin: 0;
        padding: 0;
        box-sizing: border-box;
        outline: 0;  
}
    html,body, #root{
      height: 100 %;
    }
body {
  text-rendering: optmizeLegibility !important;
  -webkit-font-smooting: antialiased !important;
  font-family: sans-serif;
  background: #DDD
}
`;


export default GlobalStyle; 