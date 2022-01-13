import styled, {css} from 'styled-components';
import { FaLinkedinIn, FaGithub, FaWhatsapp } from '../../styles/IconsConfig';

export const Container = styled.div`
    color: white;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 4rem;
    border-top-style: solid;
    border-width: 1px;
    border-color: ${({theme}) => theme.colors.primaryColor};
    background-color: black;

    @media (max-width: 690px){
        justify-content: center;
        align-items: center;
        flex-direction: column;
        height: auto;
    }
`;
export const MsgAgradecimento = styled.div`
    text-align: center;

    h3, h4{
        font-weight: 300;
        font-style: italic;
        padding: 5px;
    }
`;
export const RedesSociais = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 40%;

    @media (max-width: 690px){
        flex-direction: column;
    }
`;

const Icons = css`
    cursor: pointer;
    color: white;
    height: 3rem;
    width: 3rem;
    padding: 0 0.8rem 0 0;
    &:hover{
        color: ${({theme}) => theme.colors.fourthColor};
    }
`;

export const Linkdin = styled(FaLinkedinIn)`
    ${Icons}
`;

export const GitHub = styled(FaGithub)`
    ${Icons}
`;

export const WhatsApp = styled(FaWhatsapp)`
    ${Icons}
`;