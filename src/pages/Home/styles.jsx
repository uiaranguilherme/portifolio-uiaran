import styled, {css} from "styled-components";
import {FaGithub, FaLinkedinIn, FaWhatsapp} from '../../styles/IconsConfig';

export const Container = styled.div`
    overflow: hidden;
    display: flex;
    height: auto;
    width: 100%;
    flex-direction: column;
    background-color: ${({theme}) => theme.colors.bkHome};

    &:first-child{
        margin-left: 0;
    }
`;

export const HomeApresentation = styled.div`
    display: flex;
    width: 100%;
    height: 100%;

    section{
        display: flex;
        width: auto;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }

    @media (max-width : 600px){
        margin-top: 50px;
        flex-direction: column;

        section{
            flex-direction: row;
        }
    }
`;

export const HomeText = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 1rem 4rem;
    height: 100vh;
    width: 70%;
    
    
    span{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100%;
        p{
            margin-bottom: 1rem ;
            font-weight: 300;
            font-family: Roboto, sans-serif;
            font-size: 1.6rem;
        }
    }

    @media (max-width : 690px){
        width: 100%;
        height: auto;
    }
`;

const Icons = css`
    cursor: pointer;
    padding: 0.2rem;
    background-color: ${({theme}) => theme.colors.bkHoverHeader};
    color: ${({theme})=> theme.colors.whiteColor};
    height: 3rem;
    width: 3rem;
    border-radius: 50%;
    margin: 1rem;
    transition: all 0.5s;
    
    &:hover{
        background-color: ${({theme}) => theme.colors.fourthColor};
    }
`

export const GitIcons = styled(FaGithub)`
    ${Icons}
`;
export const LinkdinIcons = styled(FaLinkedinIn)`
    ${Icons}
`;
export const WhatsIcons = styled(FaWhatsapp)`
    ${Icons}
`;

export const ImgDev = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 40vh;
    width: 100%;

    img{
        border-radius: 1rem;
        padding: 0.3rem;
        margin: 1rem;
        height: 100%;
        width: auto;
    }
    @media (min-width: 600px){
        height: 90vh;
        width: 100%;
        img{
            height: 20rem;
        }
    }
`;