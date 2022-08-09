import styled from 'styled-components';


export const ContainerSobre = styled.div`
width: 100%;
max-width: 900px;
height: 500px;
display: flex;
justify-content: center;
gap: 20px;
padding-top: 50px;
flex-wrap: wrap;
background-color: #010d23;

`
export const ContainerText = styled.div`
width: 100%;

padding: 10px;
max-height: 240px;
border-radius: 10px;
color: white;
border: 1px solid #3e838c;
max-width: 400px;

`


export const ContainerPhoto = styled.div`
width: 100%;
max-width: 200px;

& > img{
  width: 100%;
  border-radius: 20px;
  border: 1px solid #3e838c;
}

@media screen and (max-width:670px) {
  & > img{
    display: none;
  }
}

`