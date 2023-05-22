import { styled } from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 340px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 1px solid white;
  flex-direction: column;
  padding: 130px 10px 10px 10px;
  overflow-y: scroll;

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
  gap: 10px;

  img {
    width: 200px;
    align-self: baseline;
    border: 1px solid ${(props) => props.theme.textColor};
  }
`;
