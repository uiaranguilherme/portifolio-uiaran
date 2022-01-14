
import { Container, InfoTec, DescriTech } from './styles';
console.log(window.innerWidth)
const Skils = ({img, descricao}) => {
  return (
    <Container width={window.innerWidth}>
      <InfoTec>
        <div>
          <img src={img} alt="" />
        </div>
        
      </InfoTec>
      <DescriTech>
        <p>{descricao}</p>
      </DescriTech>
    </Container>
  );
}

export default Skils;