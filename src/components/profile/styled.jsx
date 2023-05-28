import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 600px;
  height: 550px;
  padding: 10px;
  background-color: ${(props) => props.theme.card};
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 40px;
`;
export const PictureContainer = styled.div`
  width: 300px;
  border-bottom: 1px solid white;
  height: 300px;

  img {
    width: 100%;
  }
`;

export const Info = styled.div`
  background-color: aliceblue;
  text-align: center;
  width: 100%;
  max-width: 500px;

  h1 {
    color: black;
  }
`;
