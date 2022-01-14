import styled, {css} from "styled-components";
import {FaHome, FaCode, FaHashtag} from "../../styles/IconsConfig";


const Icons = css`
    cursor: pointer;
    height: 1.8rem;
    width: 1.8rem;
`


export const Container = styled.div`
  z-index: 9999;
  display: flex;
  position: fixed;
  justify-content: end;
  height: auto;
  width: 100%;
  
  header{
      display: flex;
      position: relative;
      justify-content: end;
      align-items: center;
      background-color: ${({theme}) => theme.colors.fourthColor};
      height: 100%;
      width: auto;
      padding: 5px;
      margin: 5px 5px 0;

      border-radius: 10px;
        section{
            height: 10px;
            width: 10px;
            border-radius: 50%;
            background-color: ${({theme}) => theme.colors.whiteColor};
        }

        a{
        z-index: 2;
        width: 8rem;
        padding: 0.5rem;
        text-decoration: none;
        margin:0 5px 0 5px ;
        
        div{
        cursor: pointer;
        display: flex;
        justify-content: center;
        align-items: center;

        font-family: Roboto, sans-serif;
        font-weight: 300;
        font-size: 1.3rem;
        color: ${({theme}) => theme.colors.whiteColor};

        &:hover{
            fill-opacity: 0.8;
        }

        svg{
              margin-right:0.8rem ;
        }
      }
    }
  }
  
    &:nth-child(2){
      border: solid;
      border-width: 2px;
      border-color: ${({theme}) => theme.colors.bkColor};
    }

    @media (max-width: 600px){
      justify-content: center;
      width: 100%;
        header{
          display: none;
        }
        a{
          width: auto;
        }
    }
`;

export const HeaderMobile = styled.div`
  display: none;
  position: absolute;

  @media (max-width : 600px){
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
    width: 100vw;

    background-color: ${({theme}) => theme.colors.fourthColor};

    section{
        height: 50%;
        width: 80%;
      }
  }

`;

export const Backhover = styled.div`
  position: absolute;
  height: 80%;
  width: 8rem;
  border-radius: 10px;
  background-color: ${({theme}) => theme.colors.bkHoverHeader};
  margin-right: ${(props)=> props.marginRight }px;
  transition: all 1s ease-in-out;
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