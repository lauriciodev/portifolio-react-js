import Contato from "../../assets/contato.gif";
import { Button } from "../../global/styles";
import { Container, ContainerForm, ContainerGif } from "./styled";

export default function Contact() {
  return (
    <Container>
      <ContainerForm>
        <h3>Entre em contato</h3>
        <input type="text" placeholder="Nome" />
        <input type="email" placeholder="Email" />
        <input type="text" placeholder="Assunto" />
        <textarea placeholder="Mensagem" />
        <Button type="submit">Enviar</Button>
      </ContainerForm>
      <ContainerGif>
        <img src={Contato} />
      </ContainerGif>
    </Container>
  );
}
