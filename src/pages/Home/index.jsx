import React from 'react';
import { Container, HomeApresentation, HomeText, ImgDev, GitIcons, LinkdinIcons, WhatsIcons} from './styles';

import Header from '../../components/Header';
import HeaderMobile from '../../components/HeaderMobile';

import imgFace from '../../assets/img/asas.png'
import { Link } from 'react-router-dom';

const Home = () => {
    return (
        <Container id='home'>
                <Header/>
                <HeaderMobile/>
                <HomeApresentation>
                        <section>
                            <a href="https://github.com/uiaranguilherme"><GitIcons/></a>
                            <a href="https://www.linkedin.com/in/uiarancampos/"><LinkdinIcons/></a>
                            <a href="https://api.whatsapp.com/send?phone=5541997498395"><WhatsIcons/></a>
                        </section>
                    <HomeText>
                        <span>
                            <p>Hello Word, Meu nome é <strong>Uiaran Guilherme</strong>, sou desenvolvedor Front-end.</p>
                            <p>Minha história começou quando tive a primeira experiência com desenvolvimento web, foi por curiosidade, na vontade de sanar um problema, naquela época nunca pensei que viria a ser Desenvolvedor de Ambientes Web.</p>
                            <p>Este é meu Portifólio, fique a vontade para conhecer meus trabalhos.</p>
                        </span>
                    </HomeText>
                    <ImgDev >
                        <img src={imgFace} alt="" srcset="" />
                    </ImgDev>
                </HomeApresentation>
        </Container>
    )
}

export default Home