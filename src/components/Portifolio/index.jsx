

import {Container, ImgPortifolio, Descricao, TecUsadas} from './styles';

const Portifolio = ({ titulo,  descricao, video, tecnologias}) => {
        return (
            <Container>
                <ImgPortifolio>
                    <div>
                       <img src={video} alt="" srcset="" />
                    </div>
                </ImgPortifolio>
              <Descricao>
                  <h1>{titulo}</h1>
                  <p>{descricao}</p>
                  <TecUsadas>
                        {tecnologias}
                  </TecUsadas>
              </Descricao>
            </Container>
        );
}

export default Portifolio;