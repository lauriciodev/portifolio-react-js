
import styled, { createGlobalStyle} from "styled-components";

const Global = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
}
body{
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Lucida Grande', 'Lucida Sans', Arial, sans-serif;
    background-color: #f2f2f2;
}

`



export const Container = styled.div`
    display: ${props => props.displayContainerSet || 'block'};
    align-items: ${props => props.alignContainerSet || 'flex-start'};
    justify-content: ${props => props.justifyContainerSet || 'flex-start'};
`

export default Global
