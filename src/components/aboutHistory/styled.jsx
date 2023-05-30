import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  flex-direction: column;
  padding: 130px 20px 0px 20px;
  overflow-y: scroll;

  @media screen and (max-width: 570px) {
    height: 900px;
  }

  h1 {
    color: ${(props) => props.theme.textColor};
    text-align: left;
    width: 100%;
  }
  p {
    color: ${(props) => props.theme.textColor};
  }
`;

export const ContainerPic = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  gap: 10px;

  img {
    width: 100%;
    max-width: 200px;
    align-self: baseline;
    border: 1px solid ${(props) => props.theme.textColor};

    @media screen and (max-width: 570px) {
      max-width: 140px;
    }
  }
`;
