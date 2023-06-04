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
  padding: 15px 0;
  position: fixed;
  top: 0;
`;
export const ContainerLinks = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transition: all 2s;

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

  @media screen and (max-width: 700px) {
    display: none;
  }
`;

export const MobileContainerLinks = styled.div`
  width: 100%;
  max-width: 500px;
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  transition: all 1s;

  a {
    font-weight: 600;
    color: ${(props) => props.theme.textColor};
    padding: 5px;
    box-sizing: border-box;
    transition: all 600ms;
    border-bottom: 1px solid ${(props) => props.theme.textColor};

    &:hover {
      background-color: ${(props) => props.theme.hover};
    }
  }

  @media screen and (min-width: 701px) {
    display: none;
  }

  @media screen and (max-width: 700px) {
    display: ${(props) => props.visible};
    flex-direction: column;
    width: 200px;
    gap: 10px;
    padding: 10px;
    position: absolute;
    top: 50px;
    left: 10px;
    background-color: ${(props) => props.theme.navContainer};
    border: 1px solid ${(props) => props.theme.textColor};
    z-index: 100;
  }
`;

export const ButtonToggle = styled.button`
  color: ${(props) => props.theme.textColor};
  position: absolute;
  left: 30px;
  padding: 5px;
  font-size: 1.2rem;
  background-color: ${(props) => props.theme.body};
  border: 1px solid ${(props) => props.theme.textColor};
  border-radius: 10px;
  font-family: "Ubuntu Mono", monospace;

  @media screen and (min-width: 700px) {
    display: none;
  }
`;

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
