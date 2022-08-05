import styled from "styled-components";


export const Container = styled.div`
width: ${props => `${props.widthContainerSet}px`};
height: ${props => `${props.heightContainerSet}vh`};
display: ${props => props.displayContainerSet};
padding: ${props => `${props.paddingContainerSet}px`};
padding-top: ${props => `${props.paddingTopContainerSet}px`};
background-color: ${props => props.backGroundColorContainerSet};
align-items: ${props => props.alignContainerSet};
justify-content: ${props => props.justifyContainerSet};
flex-direction: ${props => props.flexDirectionSer};
gap: ${props => `${props.gapContainerSet}px`};


& > a{
  color: aliceblue;
  font-size: 1.4rem;
  text-decoration:none;
  transition: all .2s;
}


& > a:hover{
  color: black;
}
`

export const ContainerIcon = styled.div`
display:${props  => props.displayContainerIconSet};
align-items: ${props => props.alignContainerIconSet};
justify-content: ${props => props.justifyContainerIconSet};
width: ${props => `${props.widthContainerIconSet}%`};
padding-left: ${props => `${props.paddingLeftContainerIcons}px`};

& > svg{
  font-size: 1.5rem;
  color: beige;
}


`


export const FotoContainer = styled.div`
padding: ${props => `${props.paddingFotoContainerSet}px`};
width: ${ props => `${props.widthFotoContainerSet}%`};
max-width: ${props => `${props.maxWidthFotoContainerSet}px`};
border-radius: 100%;


& > img{
  width: 100%;
  border-radius: 100%;
  border: 3px solid #65727a;

  
}

`