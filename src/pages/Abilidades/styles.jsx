import styled, { css } from "styled-components";
import { FaArrowLeft, FaArrowRight } from "../../styles/IconsConfig";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin: 2rem 0;
    
    &:hover svg{
        opacity: 1;
    }
`;
export const NavContent = styled.div`
    z-index: 99;
    position: relative;
    background-color: red;
    display: flex;

`;

const Icon = css`
    cursor: pointer;
    opacity: 0;
    margin: 5.5rem 0.3rem;
    padding: 0.3rem;
    height: 2.5rem;
    width: 2.5rem;
    transition: all 0.5s ease-in-out;

    border-radius: 50%;
    background-color: ${({theme}) => theme.colors.whiteColor};

`;

export const NavLeft = styled(FaArrowLeft)`
    position: absolute;
    left: 0;   
    ${Icon}
`;
export const NavRight = styled(FaArrowRight)`
    position: absolute;
    right: 0;
    ${Icon}
`;
export const SkilsContent = styled.div`
    h3{
        font-weight: 500;
        font-size: 2rem;
        margin: 0.3rem 1rem;
    }
`;
export const ContentSkils = styled.div`
    overflow: hidden;
    display: flex;
    flex-grow: 1;
    margin-left: ${(props) => props.marginLeft}px;
    transition: all 0.8s ease-in-out;
`;