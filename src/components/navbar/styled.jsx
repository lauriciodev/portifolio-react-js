import styled from "styled-components";
import * as colors from "../../global/colors";

export const Container = styled.nav`
  width: 100vw;
  height: 40px;
  background-color: ${(props) => props.theme.navContainer};
  display: flex;
  gap: 140px;
  align-items: center;
  justify-content: center;
  padding: 10px 0;
`;
export const ContainerLinks = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;

  a {
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    padding: 5px;
    box-sizing: border-box;
    transition: all 600ms;

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }
`;

export const Link = styled.a``;

export const ToggleTheme = styled.button`
  color: ${(props) => props.theme.textColor};
  position: absolute;
  right: 30px;
  padding: 5px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  font-family: "Ubuntu Mono", monospace;
`;
