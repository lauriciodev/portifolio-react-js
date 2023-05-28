import { createGlobalStyle, styled } from "styled-components";
import * as colors from "./colors";

export const GlobalStyle = createGlobalStyle`
body{
  font-family: 'Ubuntu Mono', monospace;
  font-weight: 400;
  box-sizing: border-box;
  width: 100vw;
  padding: 0;
  margin: 0;
  background-color: ${(props) => props.theme.body};
  color: ${colors.TextColor};
  overflow-x: hidden;


  a{
    color:white;
   text-decoration: none;
   font-family: 'Ubuntu Mono', monospace;
  }



  h1{
    color: ${(props) => props.theme.textColor};
    text-align:center ;

  }


}
`;

export const Button = styled.button`
  padding: 10px;
  background-color: ${(props) => props.theme.buttonColor};
  border: 1px solid ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1.1rem;
  font-weight: 700;
`;
