import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.div`
max-width: 30rem;
background-color: ${THEME.colors.dark_gray};

display: flex;
align-items: center;
gap: 2rem;
padding: 1.5rem 2rem;
border-radius: 10px;


`
export const Icon = styled.img`

width: 4rem;
height: 4rem;
`
export const ContainerText = styled.div`

`
export const Title = styled.div`

font-size: 2rem;
font-weight: bold;
color: ${THEME.colors.white};
`
export const Goals = styled.p`
font-size: 1.6re,;
font-weight: 400;
color: ${THEME.colors.light_gray};
`

export const ContainerProgress = styled.div`
flex: 1;
display: flex;
align-items: center;
justify-content: flex-end;

`

export const PizzaProgress = styled.div`
height: 4rem;
width: 4rem;
border-radius: 99px;
background-color: ${THEME.colors.green};
`