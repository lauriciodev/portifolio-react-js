import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 100vh;
 display: flex;
 align-items: center;
 justify-content: center;
 padding: 20px;
 gap: 20px;
 flex-direction: column;
`

export const SubContainer = styled.div`
width: 100%;
height: 100%;


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