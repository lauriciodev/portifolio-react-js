import { styled } from "styled-components";

export const ContainerProjects = styled.div`
  width: 100%;
  max-width: 900px;
  display: flex;
  flex-wrap: wrap;
  margin: 30px auto;
  gap: 5px;
`;

export const CardProjects = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  gap: 5px;
  border: 1px solid ${(props) => props.theme.textColor};
  padding: 3px;

  img {
    width: 200px;
  }
`;

export const LinkProject = styled.a`
  padding: 10px;
  background-color: ${(props) => props.theme.linksColor};
  color: ${(props) => props.theme.textColor};
  text-align: center;
`;
