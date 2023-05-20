import { useContext } from "react";
import { Container, ContainerLinks, ToggleTheme } from "./styled";
import { FaMoon, FaSun } from "react-icons/fa";
import { ThemeContext } from "styled-components";
import { Link } from "react-router-dom";

export default function Nav() {
  const { theme, setTheme } = useContext(ThemeContext);

  return (
    <Container>
      <ContainerLinks>
        <Link to="/">Home</Link>
        <Link to="/about">Sobre</Link>
        <Link to="/projects">Projetos</Link>
        <Link to="/contact">Contato</Link>
      </ContainerLinks>
      <ToggleTheme onClick={() => setTheme(!theme)}>
        {theme ? <FaMoon /> : <FaSun />}
      </ToggleTheme>
    </Container>
  );
}
