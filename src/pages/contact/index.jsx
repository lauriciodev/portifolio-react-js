import Contato from "../../assets/contato.gif";
import SuccessEmail from "../../assets/success.gif";
import { Button } from "../../global/styles";
import {
  Container,
  ContainerForm,
  ContainerGif,
  ContainerSuccess,
  SubContainerForm,
  SubContainerSuccess,
} from "./styled";
import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { Link } from "react-router-dom";

export default function Contact() {
  const [sended, setSended] = useState(false);
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_nd7imtk",
        "template_xql3q5b",
        form.current,
        "mC_TLHzMcbzKd-Q0u"
      )
      .then(
        (result) => {
          setSended(true);
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <Container>
      {sended ? (
        <ContainerSuccess>
          <SubContainerSuccess>
            <p>
              Email envidado com sucesso! <br />
              retornarei o quanto antes
            </p>
            <Link to="/">Volar para Home</Link>
          </SubContainerSuccess>

          <ContainerGif>
            <img src={SuccessEmail} />
          </ContainerGif>
        </ContainerSuccess>
      ) : (
        <ContainerForm>
          <SubContainerForm ref={form} onSubmit={sendEmail}>
            <h3>Entre em contato</h3>
            <input type="text" placeholder="Nome" name="user_name" />
            <input type="email" placeholder="Email" name="user_email" />
            <input type="text" placeholder="Assunto" name="subject" />
            <textarea placeholder="Mensagem" name="message" />
            <Button type="submit">Enviar</Button>
          </SubContainerForm>
          <ContainerGif>
            <img src={Contato} />
          </ContainerGif>
        </ContainerForm>
      )}
    </Container>
  );
}
