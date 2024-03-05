import styled from "styled-components";
import { THEME } from "../../../theme";

export const Container = styled.div`
background-color: ${THEME.colors.black};
width: 100vw;
height: 100vh;
overflow-x: hidden;

.hidden{
    display: none;
}

`

export const ContainerMain = styled.div`

`

export const ContainerStepOne = styled.div`

margin-top: 2rem;
display: flex;
flex-direction: column;
padding: 4rem;
width: 52rem;
margin: 0 auto;
gap: 1rem;

@media screen and (max-width: 468px){
    width: 100vw;
}
`

export const ContainerStepTwo = styled.div`

display: flex;
flex-direction: column;
padding: 4rem;
width: 52rem;
margin: 0 auto;
gap: 1rem;

@media screen and (max-width: 468px){
    width: 100vw;
}



`

export const TextQuestion = styled.p`
font-size: 2rem;
font-weight: bold;
color: ${THEME.colors.white};

@media screen and (max-width: 468px){
    font-size: 1.8rem;
}

`

export const ContainerLimitTime = styled.div`
margin-bottom: 2rem;
display: flex;
align-items: center;
gap: 1rem;

`

export const InputLimitTime = styled.input`

width: 7rem;
height: 5rem;
border-radius: 10px;
border: none;
background-color: ${THEME.colors.dark_gray};
margin-right: 1.5rem;

`

export const ButtonTime = styled.button`
width: 10rem;
height: 4rem;
border-radius: 99px;
border: none;
background-color: ${THEME.colors.dark_gray};
cursor: pointer;
color: white;
font-weight: bold;

`

export const Input = styled.input`

margin-bottom: 2rem;
background-color: ${THEME.colors.dark_gray};
height: 5rem;
width: 100%;
border-radius: 10px;
border: 1px solid ${THEME.colors.dark_gray};
padding: 0 2rem;
color: ${THEME.colors.white};
font-size: 1.6rem;

&:focus{
    outline: none;
    border: 1px solid ${THEME.colors.white};
}
`
export const ContainerImportance = styled.div`

display: flex;
justify-content: space-between;
margin-bottom: 2rem;
`
export const Option = styled.button`

background-color: ${THEME.colors.dark_gray} ;
width: 13rem;
height: 4rem;
border-radius: 10px;
border: 1px solid ${THEME.colors.dark_gray};
color: ${THEME.colors.white};
font-weight: 600;
cursor: pointer;

@media screen and (max-width: 468px){
    width: 31%;

}


`
export const InputAbout = styled.textarea`
background-color: ${THEME.colors.dark_gray};
height: 10rem;
width: 100%;
border-radius: 10px;
border: 1px solid ${THEME.colors.dark_gray};
padding: 0 2rem;
color: ${THEME.colors.white};
font-size: 1.6rem;
padding: 1rem 2rem;
margin-bottom: 2rem;

&:focus{
    outline: none;
    border: 1px solid ${THEME.colors.white};
}
`


export const Button = styled.button`


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
border: none;
cursor: pointer;
`