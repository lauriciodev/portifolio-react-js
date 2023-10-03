import { Container, ContainerPic } from "./styled";
import lauricio from "../../assets/lauricio.jpg";
import trabalho from "../../assets/trabalho.jpg";
import setup from "../../assets/setup.jpg";

export default function AboutHistory() {
  return (
    <Container>
      <h1>Lauricio De Sousa</h1>
      <p>
        Minha carreira começou em um campo completamente diferente, na área de
        telecomunicações. Durante dois anos, mergulhei fundo nesse mundo,
        trabalhando com redes, cabos e sistemas de comunicação. Era um trabalho
        estável, mas algo me incomodava profundamente. Eu sentia que havia algo
        mais, algo que estava além dos fios e das conexões.
      </p>
      <ContainerPic>
        <img src={lauricio} alt="" />
        <img src={trabalho} alt="" />
        <img src={setup} alt="" />
      </ContainerPic>
      <p>
        Decidi explorar esse novo mundo, não com a intenção de uma mudança de
        carreira, mas simplesmente por pura curiosidade. Comecei a estudar
        programação por conta própria, devorando tutoriais online, cursos e
        livros. Ficava horas a fio lendo e experimentando, tentando entender o
        que estava por trás daqueles sistemas.
      </p>
      <p>
        Após seis meses de autoaprendizado e muitas noites em claro escrevendo
        linhas de código, percebi que a programação era mais do que apenas uma
        curiosidade passageira; era minha verdadeira paixão. Decidi então tomar
        uma decisão ousada: deixei meu emprego estável na área de
        telecomunicações e aceitei um novo trabalho como programador.
      </p>
      <p>
        Hoje, meu objetivo é claro: quero contribuir para a evolução tecnológica
        do mundo. Trabalho em projetos que melhoram a eficiência das
        comunicações, desenvolvo soluções de segurança cibernética e me envolvo
        em projetos de inteligência artificial que podem melhorar a vida das
        pessoas..
      </p>
    </Container>
  );
}
