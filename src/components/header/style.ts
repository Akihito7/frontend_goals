import styled from "styled-components"
import { THEME } from "../../theme"

export const Container = styled.div`

height: 15rem;
width: 100%;
background-color: ${THEME.colors.dark_gray};        
border-radius: 0 0 4rem 4rem;

display: flex;
align-items: center;

padding: 0 8rem;

@media screen and (max-width:468px){
    width: 100%;
    height: auto;
    padding: 2rem 4rem;
}
`

export const Profile = styled.img`

height: 8rem;
width: 8rem;
border-radius: 99px;

@media screen and (max-width:468px){
    height: 6rem;
    width: 6rem;

}

`

export const ContainerWelcome = styled.div`

display: flex;
align-items: flex-end;
gap: 1rem;

@media screen and (max-width:468px){
    flex-direction: column;
    align-items: flex-start;
    gap: 1rem;
}

`
export const ContainerText = styled.div`

    display: flex;
    flex-direction: column;
    
`
export const Name = styled.p`

font-size: 1.4rem;
font-weight: 500;
color: ${THEME.colors.white};

@media screen and (max-width:468px){
    font-size: 1.4rem;
}

`

export const Goals = styled.h1`

font-size: 2rem;
color: ${THEME.colors.white};
font-weight: bold;

@media screen and (max-width:468px){
    font-size: 1.8rem;
}


`