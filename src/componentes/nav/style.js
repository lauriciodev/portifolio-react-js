import styled from "styled-components";


export const Container = styled.div`
width: ${props => `${props.widthContainerSet}px`};
display: flex;
height: ${props => `${props.heightContainerSet}vh`};
padding: ${props => `${props.paddingContainerSet}px`};
padding-top: ${props => `${props.paddingTopContainerSet}px`};
background-color: ${props => props.backGroundColorContainerSet};
align-items: ${props => props.alignContainerSet};
justify-content: ${props => props.justifyContainerSet};
flex-direction: ${props => props.flexDirectionSer};
gap: ${props => `${props.gapContainerSet}px`};
transition: all .3s;

@media screen and (max-width:400px){
  position: fixed;
}

`

export const socialIcon = styled.a`
text-decoration: none;
display: ${props => props.displaySocialLinkSet};
font-size: 1rem;
color: #038bbb;
`





export const ContainerIcon = styled.div`
display:${props  => props.displayContainerIconSet};
align-items: ${props => props.alignContainerIconSet};
justify-content: ${props => props.justifyContainerIconSet};
width: ${props => `${props.widthContainerIconSet}px`};
height: ${props => `${props.heightContainerIconSet}px`};
background-color: ${props => props.backgroundColorIconSet};
position: absolute;
left: 10px;
border-radius: 10px;
transition: all .3s;
cursor: pointer;


&:hover{
  background-color: #3ab1d5;
}

& > svg{
  transition: all .3s;
  font-size: 1.5rem;
  color: beige;
transform: rotate(${props => `${props.rotateIconSet}deg`});


}

`
export const ContainerLinks = styled.div`
padding-top: 30px;
display: ${props => props.displayContainerLinkSet};
flex-direction: column;
align-items: center;
justify-content: center;
gap:10px;
position: relative;


& > a{
  font-weight: 400;
  color:#ffff;
  font-size: 1.4rem;
  text-decoration:none;
  transition: all .2s;

}

& > a::after{
  content: "";
  position: absolute;
  background-color:#038bbb;
  border-radius: 100%;
  right: -25px;
}


& > a:hover::after{
  background-color:#038bbb;
  width: 20px;
  height: 20px;
  color: #038bbb;
}
& > a:hover{
  color: #038bbb;
}
`

export const FotoContainer = styled.div`
padding: ${props => `${props.paddingFotoContainerSet}px`};
display: ${props => props.displayFotoContainerSet};
width: ${ props => `${props.widthFotoContainerSet}%`};
max-width: ${props => `${props.maxWidthFotoContainerSet}px`};
border-radius: 100%;
padding-top: 30px;


& > img{
  width: 100%;
  border-radius: 100%;
  border: 2px solid  #fff;
}

`