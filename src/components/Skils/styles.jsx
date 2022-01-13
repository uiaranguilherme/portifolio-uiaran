import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    min-width: calc(100vw - 2.5rem);
    max-height: auto;
    margin: 1.5rem;
    padding: 0.5rem;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.primaryColor};

    transition: all 0.6s ease-in-out;
    filter:saturate(10%);

    &:hover{
            filter:saturate(100%);
        }

    @media (min-width: 600px){
        min-width: 23rem;
    }
`;

export const InfoTec = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 40%;
    div{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 80%;
    }
    img{
        border-radius: 10px;
        height: auto;
        width: 110%;
        transition: all 0.3s;
        
        
    }
`;

export const DescriTech = styled.div`
    width: 100%;
    height: auto;
    padding: 0.3rem 0.3rem 0.3rem 0.8rem;
    font-weight: 300;
    font-size: 1rem;
`;