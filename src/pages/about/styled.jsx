import styled from "styled-components";
import * as colors from "../../global/colors";

export const ContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  margin: 20px auto;
`;
export const SubContainerAbout = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
  background-color: aliceblue;
  margin: 10px auto;

  h1 {
    color: black;
  }
`;

export const ContainerLinks = styled.div`
  width: 100%;
  padding: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  a {
    background-color: ${(props) => props.theme.linksColor};
    padding: 5px;
    color: ${(props) => props.theme.textColor};
    border: 1px solid black;
  }
`;
