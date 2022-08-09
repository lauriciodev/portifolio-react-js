import styled from "styled-components";

export const Container = styled.div`
 width: 100%;
 height: 400px;
 max-width: 1000px;
 display: grid;
 grid-template-columns: repeat(auto-fill,minmax(200px,1fr));
 grid-template-rows: repeat(200px,minmax(200px,300px));
 gap: 10px;
 padding: 20px;
`

export const ContainerProjetos = styled.div`
height: 50px;
padding: 10px 14px;
  background-color: #010d23;
  border-radius: 10px;
  color: white;
  border: 1px solid #3e838c;
  transition: .3s;

:hover{
  border: 1px solid #13c8b5;
  box-shadow: 1px 2px 6px black;


}

`


