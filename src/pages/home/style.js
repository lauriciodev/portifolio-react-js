import styled from 'styled-components';

export const ContainerHome = styled.div`
width: 100%;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
padding-top:50px;
`

export const ContainerFotoHome = styled.div`
width: 100%;
max-width: 200px;

& > img{
  width: 100%;
  border-radius: 100%;
  border: 2px solid #063940;
}

`

export const TitleContainer = styled.div`
text-align: center;
padding: 20px 0;
color:#010d23;
& > h1{
  font-size: 3rem;
}

& > h5{
  font-size: 1.5rem;
}

`

export const ContainerButtons = styled.div`
display: flex;

gap: 10px;
align-items: center;
justify-content: center;
flex-wrap: wrap;

& > a{
  padding: 10px 14px;
  background-color: #010d23;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  border: 1px solid #3e838c;
  transition: all .3s;

 
  
}

& > svg{
    font-size: 2rem;
    color: #010d23;
  }

& > a:hover{
  background-color: #afcacc;
  color: #010d23;;
  
  border: 1px solid #010d23;
  

 
}



`