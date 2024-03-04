import { THEME } from "../../theme";
import { Container, ContainerIcon } from "./style";
import { Home } from "react-feather"

export function Menu(){
    return (
        <Container>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
        
            </ContainerIcon>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
                
            </ContainerIcon>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
               
            </ContainerIcon>

        </Container>
    )
}