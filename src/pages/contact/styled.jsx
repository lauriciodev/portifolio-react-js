import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
  border: 1px solid white;
  gap: 10px;
  padding: 5px;
`;

export const ContainerGif = styled.div`
  width: 100%;
  max-width: 500px;

  img {
    width: 100%;
  }
`;

export const ContainerForm = styled.form`
  padding: 5px;
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
