import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`

    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
    :focus{
        outline: 0;
        box-shadow: 0 0 0 2px ${props => props.theme['gray-300']};
    }
    
    body{
        background-color: ${props => props.theme['gray-900']};
        color: ${props => props.theme['gray-300']};
    }

    body, input, textarea, button{
        font-family: 'Roboto', sans-serif;
        font-size: 1rem;
        font-weight: 400;
    }
`