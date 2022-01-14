import { useState } from 'react';
import { Container, NavContent, NavLeft, NavRight, SkilsContent, ContentSkils } from './styles';
import Skils from '../../components/Skils';
import skils from '../../assets/variaveis/skils';


function Abilidades() {

    //BOTOES DE NAVEGAÇÂO
    let [ ScrollX, setScrollX ] = useState(0);

    const atualizaLeft = (y) =>{
        ScrollX += y;
        if(ScrollX > 0){
            ScrollX = 0
        }

        setScrollX(ScrollX)
    }

    const atualizaRight = (y) =>{
        ScrollX -= y;
        
        if(ScrollX < -skils.length * 380){
            ScrollX = 0
        }
        setScrollX(ScrollX)
    }


  return (
        <Container id='skils'>
            <SkilsContent>
                <h3>Skils</h3>
                <NavContent>
                    <NavLeft onClick={() => atualizaLeft(400)}/>
                    <NavRight onClick={() => atualizaRight(400)}/>
                </NavContent>
                <ContentSkils marginLeft={ScrollX}>
                    {skils.map((skil) => <Skils key={skil.name} img={skil.img} descricao={skil.description}/>)}
                </ContentSkils>
            </SkilsContent>
        </Container>
    
    );
}

export default Abilidades;