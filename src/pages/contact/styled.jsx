import { styled } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 50px auto;
  border: 1px solid white;
  box-sizing: border-box;
  gap: 10px;
  padding: 12px;
`;

export const ContainerGif = styled.div`
  width: 100%;
  max-width: 500px;

  img {
    width: 100%;
  }
`;

export const ContainerSuccess = styled.div`
  display: flex;

  @media screen and (max-width: 500px) {
    gap: 20px;
    flex-direction: column;
  }
`;

export const SubContainerSuccess = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  text-align: center;
  p {
    color: ${(props) => props.theme.textColor};
    width: 100%;
    font-size: 1.3rem;
  }

  a {
    background-color: ${(props) => props.theme.buttonColor};
    padding: 5px;
    border: 1px solid ${(props) => props.theme.textColor};
  }
`;

export const ContainerForm = styled.div`
  display: flex;
  gap: 10px;

  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;

export const SubContainerForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 4px;
  width: 100%;
  max-width: 500px;

  h3 {
    text-align: center;
    color: ${(props) => props.theme.textColor};
  }

  input {
    height: 30px;
    color: ${(props) => props.theme.textColor};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.textColor};
    padding-left: 5px;
    &::placeholder {
      color: ${(props) => props.theme.textColor};
    }
  }
  textarea {
    height: 100px;
    color: ${(props) => props.theme.textColor};
    background-color: transparent;
    border: 1px solid ${(props) => props.theme.textColor};
    padding-left: 5px;
    &::placeholder {
      color: ${(props) => props.theme.textColor};
    }
  }
`;
