import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    height: auto;
    width: auto;
    background-color: ${({theme}) => theme.colors.thirdColor };

    border-top-left-radius: 2rem;
    border-top-right-radius: 2rem;

`;
export const NavBar = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 3rem;
    width: 100%;

    div{
        cursor: pointer;
        height: 1rem;
        width: 1rem;
        border-radius: 50%;
        margin: 0 1rem;
        background-color: ${({theme}) => theme.colors.primaryColor};

        &:hover, :active{
            opacity: 0.8;
        }
    }
`;