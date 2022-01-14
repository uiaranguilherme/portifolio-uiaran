import styled, { css } from "styled-components";
import {FaHome, FaCode, FaHashtag, FaBars } from "../../styles/IconsConfig";

const Icons = css`
    cursor: pointer;
    margin-right: 0.7rem;
    height: 1.8rem;
    width: 1.8rem;
    color: white;
    transition: all 1s;
`
export const Container = styled.div`
    height: auto;
    width: 100%;
    background-color: ${(props) => !props.backGraund ?  props.theme.colors.fourthColor : 'none' };

    @media (min-width: 600px){
        display: none;
    }
`;
export const MenuIcon = styled.div`
    cursor: pointer;
    position: fixed;
    z-index: 99;
`;
export const MenuMobile = styled.div`
    z-index:98 ;
    position: absolute;
    display: ${(props) => props.display};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;


    height: 100vh;
    width: 100%;
    background-color: ${({theme}) => theme.colors.fourthColor};

        div{
            display: flex;
            justify-content: center;
            align-items: center;
            height: 5rem;
            width: 10rem;
            color: white;
        }
`;
export const HomeIcon = styled(FaHome)`
    ${Icons}
`;
export const SkilsIcons = styled(FaCode)`
    ${Icons}
`;
export const PortifolioIcons = styled(FaHashtag)`
    ${Icons}
`;