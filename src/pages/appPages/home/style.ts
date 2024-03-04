import styled from "styled-components";
import { THEME } from "../../../theme";

export const Container = styled.div`
position: relative;
width: 100vw;
height: 100vh;
background-color: ${THEME.colors.black};


@media screen and (max-width:468px){
    height: auto;
}

`

export const ContainerCardGoals = styled.div`

display: flex;
gap: 2rem;
overflow-x: auto;


@media screen and (min-width: 468px) and (max-width: 1024px) and (orientation: portrait) {
    display: grid;
    grid-template-columns: repeat(3, minmax(0, 1fr));
    gap: 1rem;
}

@media screen and (max-width:468px){
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;

}

`

export const ContainerMain = styled.div`

width: 100vw;
padding: 6rem 8rem;

@media screen and (max-width:468px){
   padding: 0;
   padding: 4rem 3rem;
   margin-bottom: 3rem;
}
`

export const YourGoals = styled.h1`

font-size: 2rem;
font-weight: 600;
color: ${THEME.colors.white};
margin-bottom: 1.5rem;
`

export const ButtonAddNewGoal = styled.button`

min-width: 150px;
height: 18rem;
background-color: ${THEME.colors.dark_gray};
border-radius: 10px;
border: none;

display: flex;
justify-content: center;
align-items: center;

@media screen and (min-width: 468px) and (max-width: 1024px) and (orientation: portrait) {
    min-width: auto;
    max-width: 20rem;
}


@media screen and (max-width:468px){
    min-width: auto;
}



`