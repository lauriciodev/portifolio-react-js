
import styled, { createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
body{
   
    background-color: #f2f2f2;
}

`



export const Container = styled.div`
display: ${props => props.displayContainerSet};
align-items: ${props => props.alignContainerSet};
justify-content: ${props => props.justifyContainerSet};
`

export default Global
