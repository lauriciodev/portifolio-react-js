import {
  ContainerPhoto,
  ContainerSobre,
  ContainerText
} from "./style"
import FotoSobre from "../../../assets/img/laug1.jpg";

export const Historia = (props) =>{
  return(
    <ContainerSobre>
      <ContainerText>
        <h1>Sobre Min</h1>
        <p>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Beatae dolore consequatur quas repellendus. 
          Quo facere corporis 
          nostrum! Dolores architecto ad est quia beatae et. 
          Alias nobis laborum rem voluptatibus magni?</p>
      
        <p>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Beatae dolore consequatur quas repellendus. 
          Quo facere corporis 
          nostrum! Dolores architecto ad est quia beatae et. 
          Alias nobis laborum rem voluptatibus magni?</p>
        <p>Lorem ipsum dolor sit amet consectetur, 
          adipisicing elit. Beatae dolore consequatur quas repellendus. 
          Quo facere corporis 
          nostrum! Dolores architecto ad est quia beatae et. 
          Alias nobis laborum rem voluptatibus magni?</p>
      </ContainerText>

      <ContainerPhoto>
        <img src={FotoSobre} alt="lauricio" />
      </ContainerPhoto>
    </ContainerSobre>
  )
}