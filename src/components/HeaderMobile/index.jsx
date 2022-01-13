import { useState } from 'react';
import { Link } from "react-scroll";
import UseAnimations from 'react-useanimations';
import menu1 from 'react-useanimations/lib/menu2';
import { Container, MenuIcon, MenuMobile, HomeIcon, SkilsIcons, PortifolioIcons } from './styles';

const HeaderMobile = () => {
  let [checked, setChecked] = useState(false);
  return (
    <Container backGraund = {checked}>
        <MenuIcon onClick={() => {
                      setChecked(!checked);
                      window.scrollTo({
                        top: 0,
                        left: 0,
                        behavior: 'smooth'
                      });
                    }}>
          <UseAnimations
            reverse={checked}
            size={40}
            wrapperStyle={{ marginTop: '5px' }}
            animation={menu1}
          />
        </MenuIcon>
        <MenuMobile display={!checked ? 'none' : 'flex'}>
                <Link
                    to="home"
                    spy = { true }
                    smooth = { true }
                    offset = {0}
                    duration = { 500 }
                    ><div onClick={() => {
                      setChecked(!checked);
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
                      setChecked(!checked);
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
                      setChecked(!checked);
                    }}><PortifolioIcons/> Portifólio</div>
                </Link>
        </MenuMobile>
    </Container>
  );
}

export default HeaderMobile;