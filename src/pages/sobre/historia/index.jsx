import * as C from "./style"

export const Sobre = (props) =>{
  return(
    <C.ContainerSobre>
      <C.ContainerText>
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
      </C.ContainerText>

      <C.ContainerPhoto>
        <img src={props.FotoSobre} alt="lauricio" />
      </C.ContainerPhoto>
    </C.ContainerSobre>
  )
}