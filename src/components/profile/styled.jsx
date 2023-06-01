import styled from "styled-components";

export const ProfileContainer = styled.div`
  width: 100%;
  max-width: 600px;
  background-color: ${(props) => props.theme.card};
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 10px;
  padding: 30px;
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

export const ButtonContact = styled.a`
  padding: 10px;
  background-color: ${(props) => props.theme.buttonColor};
  border: 1px solid ${(props) => props.theme.textColor};
  color: ${(props) => props.theme.textColor};
  font-size: 1.1rem;
  font-weight: 700;
`;

export const SocialContainer = styled.div`
  background-color: aliceblue;
  padding: 10px;
  display: flex;
  gap: 10px;

  svg {
    font-size: 1.3rem;
  }
`;
