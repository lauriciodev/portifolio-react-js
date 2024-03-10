import styled from "styled-components";

export const FooterContainerStyled = styled.div`
  width: 100%;
  height: 50px;
  background-color: ${(props) => props.theme.navContainer};
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  gap: 10px;
  margin-top: 30px;

  p {
    color: white;
  }

  a {
    color: aliceblue;
    text-decoration: underline;
    padding: 3px 10px;
    background-color: #3c3;
  }
`;
