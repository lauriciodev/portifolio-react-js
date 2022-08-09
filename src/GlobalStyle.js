
import styled, { createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #045071;
}

`



export const Container = styled.div`
display: ${props => props.displayContainerSet};
align-items: ${props => props.alignContainerSet};
justify-content: ${props => props.justifyContainerSet};
`

export default Global
