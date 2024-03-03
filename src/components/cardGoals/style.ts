import styled from "styled-components"
import { THEME } from "../../theme"

export const Container = styled.div`


min-width: 15rem;
height: 18rem;
background-color: ${THEME.colors.dark_gray};

border-radius: 10px;

display: flex;
flex-direction: column;
justify-content: center;

padding: 2rem;

@media screen and (max-width: 468px){
 min-width: auto;
}
`

export const Icon = styled.img`

width: 4rem;
height: 4rem;

`

export const Title = styled.h1`

margin-top: 1rem;
font-size: 1.6rem;
font-weight: bold;
color: ${THEME.colors.white};


`
export const Goals = styled.p`

margin-top: .5rem;
font-size: 1.2rem;
font-weight: 400;
color: ${THEME.colors.light_gray};


`

export const BarProgress = styled.div`

margin-top: 2rem;
width: 100%;
height: 8px;
background-color: ${THEME.colors.black};
border-radius: 99px;

`

