import { useContext, useState } from "react";
import {
  ButtonToggle,
  Container,
  ContainerLinks,
  MobileContainerLinks,
  ToggleTheme,
} from "./styled";
import { FaBars, FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);

  return (
    <Container>
      <ButtonToggle onClick={() => setToggle(!toggle)}>
        <FaBars />
      </ButtonToggle>
      <ContainerLinks visible={toggle ? "flex;" : "none;"}>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </ContainerLinks>
      <MobileContainerLinks visible={toggle ? "flex" : "none"}>
        <Link onClick={() => setToggle(!toggle)} to="/">
          Home
        </Link>
        <Link onClick={() => setToggle(!toggle)} to="/about">
          Sobre
        </Link>
        <Link onClick={() => setToggle(!toggle)} to="/projects">
          Projetos
        </Link>
        <Link onClick={() => setToggle(!toggle)} to="/contact">
          Contato
        </Link>
      </MobileContainerLinks>
      <ToggleTheme onClick={() => setTheme(!theme)}>
        {theme ? <FaMoon /> : <FaSun />}
      </ToggleTheme>
    </Container>
  );
}
