import styled from 'styled-components';


export const ContainerSobre = styled.div`
background: linear-gradient(to top , #03223f,#afcacc) ;
width: 100vw;
height: 100vh;
display: flex;
justify-content: center;
background-color: bisque;
gap: 20px;
padding-top: 50px;
`
export const ContainerText = styled.div`
background-color: bisque;
width: 100%;
height: 400px;
background-color:#03223f;
max-width: 400px;
display: flex;
flex-direction: column;
gap: 10px;
padding: 10px;
`


export const ContainerPhoto = styled.div`
width: 100%;
max-width: 400px;

& > img{
  width: 100%;
}
`