import { Link } from "react-scroll";
import React, { useState } from 'react';
import {Container,HomeIcon, SkilsIcons, PortifolioIcons, Backhover } from './styles';

const Header = () => {

    let [moveHover, setmoveHover] = useState(300)
    
    return (
        <Container>
            <header>
                <Backhover marginRight = {moveHover}/>
                <Link
                    to="home"
                    spy = { true }
                    smooth = { true }
                    offset = {0}
                    duration = { 500 }
                    ><div onClick={() => {
                    setmoveHover(moveHover = 300)
                    }} ><HomeIcon/> Home</div>
                </Link>
                <section></section>

                <Link 
                    to="skils"
                    spy = { true }
                    smooth = { true }
                    offset = {-100}
                    duration = { 500 }
                    ><div onClick={() => {
                    setmoveHover(moveHover = 152)
                    }}><SkilsIcons/> Skils</div>
                </Link>
                <section></section>

                <Link 
                    to="portifolio" 
                    spy = { true }
                    smooth = { true }
                    offset = { -50 }
                    duration = { 500 }
                    ><div onClick={() => {
                    setmoveHover(moveHover = 0)
                    }}><PortifolioIcons/> Portifólio</div>
                </Link>
            </header>            
        </Container>
    );
}

export default Header