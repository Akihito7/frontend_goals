import styled from "styled-components";
import { THEME } from "../../../theme";

export const Container = styled.div`

width: 100vw;
height: 100vh;
background-color: ${THEME.colors.black};
overflow: hidden;

@media screen and (max-width: 468px){
    

}

`

export const Main = styled.div`
width: 100vw;
display: grid;
grid-template-columns: repeat(2, minmax(0, 1fr));
gap: 1rem;


@media screen and (max-width: 468px){
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

}

`
export const HighlightGoal = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
align-items: center;
height : calc(100vh - 15rem);

@media screen and (max-width: 468px){
height: auto;
padding: 5rem 4rem;
overflow: auto;

}
`

export const ContainerGoal = styled.div`

max-height : 40rem;
overflow: auto;


`
export const Icon = styled.img`
width: 5rem;
height: 5rem;
`
export const Title = styled.h1`


font-size: 2.4rem;
font-weight: bold;
color: ${THEME.colors.white};
max-width: 34rem;

`

export const OtherText = styled.p`


font-size: 2rem;
font-weight: bold;
color: ${THEME.colors.white};
max-width: 34rem;


`
export const Description = styled.div`
margin-top: .5rem;
font-size: 1.4rem;
font-weight: 400;
color: ${THEME.colors.white};
max-width: 34rem; 

`
export const BarProgress = styled.div`
margin-top: 2rem;
width: 100%;
height: 10px;
background-color: ${THEME.colors.white};
border-radius: 10px;
max-width: 34rem;
`
export const ButtonAddMoney = styled.div`

margin-top: 3rem;
width: 100%;
height: 5rem;
background-color: ${THEME.colors.purple};
border-radius: 10px;
display: flex;
align-items: center;
justify-content: center;
font-size: 2rem;
font-weight: bold;
color: ${THEME.colors.white};
max-width: 34rem;
border: none;
`
export const OtherGoals = styled.div`

justify-content: center;
display: flex;
flex-direction: column;
align-items: center;
gap: 1rem;
overflow-y: auto;
height : calc(100vh - 15rem);

@media screen and (max-width: 468px){
display: none;
}


`

export const ContainerGoals = styled.div`
max-height : 40rem;
overflow-x: auto;
display: flex;
flex-direction: column;
gap: 1rem;

`