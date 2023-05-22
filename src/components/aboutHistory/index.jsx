import { Container, ContainerPic } from "./styled";
import lauricio from "../../assets/lauricio.jpg";
import trabalho from "../../assets/trabalho.jpg";
import setup from "../../assets/setup.jpg";

export default function AboutHistory() {
  return (
    <Container>
      <h1>Lauricio De Sousa</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a
        reiciendis obcaecati veniam. Magnam reiciendis a sed magni distinctio
        iure, fuga, ex inventore culpa eaque ea harum tempore maiores aperiam.
      </p>
      <ContainerPic>
        <img src={lauricio} alt="" />
        <img src={trabalho} alt="" />
        <img src={setup} alt="" />
      </ContainerPic>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a
        reiciendis obcaecati veniam. Magnam reiciendis a sed magni distinctio
        iure, fuga, ex inventore culpa eaque ea harum tempore maiores aperiam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a
        reiciendis obcaecati veniam. Magnam reiciendis a sed magni distinctio
        iure, fuga, ex inventore culpa eaque ea harum tempore maiores aperiam.
      </p>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Esse a
        reiciendis obcaecati veniam. Magnam reiciendis a sed magni distinctio
        iure, fuga, ex inventore culpa eaque ea harum tempore maiores aperiam.
      </p>
    </Container>
  );
}
