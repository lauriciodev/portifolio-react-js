import styled from 'styled-components';


export const ContainerSobre = styled.div`
width: 100%;
max-width: 800px;
height: 340px;
border-radius: 30px;
display: flex;
justify-content: center;
gap: 20px;
padding: 20px;
background-color: #010d23;

`
export const ContainerText = styled.div`
width: 100%;

padding: 10px;
color: white;
max-width: 700px;

`


export const ContainerPhoto = styled.div`
width: 100%;
max-width: 300px;

& > img{
  width: 100%;
  border-radius: 20px;
  border: 1px solid #3e838c;
}

@media screen and (max-width:670px) {
  {
    display: none;
  }
}

`