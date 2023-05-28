import { styled } from "styled-components";

export const ContainerProjects = styled.div`
  width: 100%;
  max-width: 700px;
  display: flex;
  gap: 5px;
  flex-wrap: wrap;
  margin: 20px auto;
  justify-content: center;
`;

export const CardProjects = styled.div`
  width: 100%;
  max-width: 200px;
  display: flex;
  flex-direction: column;
  border: 1px solid #3c3c3c;
  position: relative;
  gap: 5px;
  padding: 3px;
  text-align: center;
  justify-content: center;
  color: ${(props) => props.theme.textColor};

  p {
    background-color: ${(props) => props.theme.navContainer};
    visibility: hidden;
    padding: 10px 0;
    display: none;
    position: absolute;
  }
  &:hover p {
    width: 100%;
    display: block;
    visibility: visible;
  }

  img {
    width: 200px;
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
