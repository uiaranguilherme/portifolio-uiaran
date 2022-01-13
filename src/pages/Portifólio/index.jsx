
import { Container, NavBar } from './styles';
import portifolio from '../../assets/variaveis/portifolio';
import Portifolio from '../../components/Portifolio';
import IconTec from '../../components/iconsTec';
import gifcalculadora from '../../assets/videos/Composição-2_1.gif';


import { useState } from 'react';

const Portifólio = () => {
  let [ indexPortifolio, setIndexPortifolio ] = useState(0);

  const atualizaPortifolio = ( chaveIndex ) => {
    indexPortifolio = chaveIndex;
    console.log(indexPortifolio)
    setIndexPortifolio(indexPortifolio)
  }
  const descricao = portifolio[indexPortifolio].description;
  const video = portifolio[indexPortifolio].video;
  const title = portifolio[indexPortifolio].title;
  const tecnologia = portifolio[0].tecnologia;


  return (
      <Container id='portifolio'>
          <NavBar>
              {
                portifolio.map(
                  (item) => {
                    return <div key={item.id} onClick={() => atualizaPortifolio(item.id)}></div>
                  }
                )
              }
          </NavBar>
          <Portifolio 
            title={title}
            descricao={descricao}
            video={video}
            tecnologias={tecnologia.map((item) => {return <IconTec icon={item}/>})}
          />
      </Container>
  );
}

export default Portifólio;