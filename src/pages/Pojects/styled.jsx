import { styled } from "styled-components";

export const ContainerProjects = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  gap: 5px;
  justify-content: center;
`;

export const CardProjects = styled.div`
  width: 100%;
  max-width: 230px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  padding: 3px;
  text-align: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};

  img {
    width: 230px;
  }
`;

export const LinkProject = styled.a`
  padding: 10px;
  background-color: ${(props) => props.theme.linksColor};
  color: ${(props) => props.theme.textColor};
  text-align: center;
  cursor: pointer;
`;

export const ContainerButtons = styled.div`
  width: 100%;
  display: flex;
  gap: 5px;
  justify-content: center;
`;
