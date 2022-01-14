import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    align-items: center;
    justify-content: center;

    @media (max-width: 690px){
        width: auto;
    }
`;
export const ImgPortifolio = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;

    height: auto;
    width: auto;
    max-width: 100%;
    
    margin: 0.8rem 0;

    div{
        margin-top: 0.8rem;
        height: auto;
        width: 90%;

        img{
            width: 100%;
            border-radius: 10px;
        }
    }

    
`;
export const Descricao = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    overflow-x: hidden;
    height: auto;
    width: 100%;
    padding: 1rem;
    color: white;
    h1{
        margin-bottom: 2rem;
    }
    p{  
        padding: 0 3rem;
        width: 100%;
        font-size: 1.3rem;
        font-weight: 300;
        font-size: 1.1rem;
    }
`;
export const TecUsadas = styled.div`
    display: flex;
    margin-top: 3rem;
    
    div{
    margin: 1rem 0.4rem;
    height: 3rem;
    width: 3rem;
    border-radius: 10px;
    background-color: ${({theme}) => theme.colors.fourthColor};

    svg{
        height: 2.5rem;
        width: 2.5rem;
    }
}
`;
