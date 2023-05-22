import { Container } from "./styled";
import cssLogo from "../../assets/lenguages/css3-original.svg";
import gitLogo from "../../assets/lenguages/git-original.svg";
import htmlLogo from "../../assets/lenguages/html5-original.svg";
import javascriptLogo from "../../assets/lenguages/javascript-plain.svg";
import linuxLogo from "../../assets/lenguages/linux-original.svg";
import mongolLogo from "../../assets/lenguages/mongodb-original.svg";
import mysqlLogo from "../../assets/lenguages/mysql.svg";
import nginxLogo from "../../assets/lenguages/nginx-original.svg";
import nodeLogo from "../../assets/lenguages/nodejs-original-wordmark.svg";
import npmLogo from "../../assets/lenguages/npm-original.svg";
import styledLogo from "../../assets/lenguages/styled.png";
import reactLogo from "../../assets/lenguages/react-original.svg";

export default function Leguages() {
  return (
    <Container>
      <img src={mysqlLogo} alt="react" />
      <img src={mongolLogo} alt="react" />
      <img src={npmLogo} alt="react" />
      <img src={nginxLogo} alt="react" />
      <img src={nodeLogo} alt="react" />
      <img src={styledLogo} alt="react" />
      <img src={reactLogo} alt="react" />
      <img src={gitLogo} alt="git" />
      <img src={cssLogo} alt="react" />
      <img src={htmlLogo} alt="react" />
      <img src={javascriptLogo} alt="react" />
      <img src={linuxLogo} alt="react" />
    </Container>
  );
}
