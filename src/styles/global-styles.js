// Aquí van todos los estilos globales de nuestra app. Siempre se pondrán al principio de App en forma de etiqueta.
import { createGlobalStyle } from 'styled-components';

// ESTOS ESTILOS USARLOS SIEMPRE, ES TIPO PLANTILLA
export const GlobalStyles = createGlobalStyle`
    *,
  *::after,
  *::before{
    box-sizing: border-box;
  }

  img{
    display: block;
    max-width: 100%;
  }
  
  body{
    margin: 0;
    font-family: sans-serif;
  }

  a{
    text-decoration: none;
    color: inherit;
  }

  ul{
    list-style: none;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
  }  
`;
