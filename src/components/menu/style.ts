import styled from "styled-components";
import { THEME } from "../../theme";

export const Container = styled.div`
position: absolute;
bottom: 0;

width: 100vw;
padding: .5rem;
background-color: ${THEME.colors.dark_gray};

display: flex;
align-items: center;
justify-content: center;
gap: 5rem;


@media screen and (max-width:468px){
    position: fixed;
    padding: 1.5rem;

}


`

export const ContainerIcon = styled.div`

display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

`