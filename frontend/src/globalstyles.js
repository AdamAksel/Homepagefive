import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
*{
    box-sizing:border-box;
    margin:0;
    padding:0;  
    
    @media (prefers-color-scheme: light) {
    body {
        background-color: white;
        color: black;
    }
}
@media (prefers-color-scheme: dark) {
    body {
        background-color: black;
        color: white;
    }
}
}


`

export default GlobalStyle
