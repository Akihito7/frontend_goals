import { THEME } from "../../theme";
import { Container, ContainerIcon, Text } from "./style";
import { Home } from "react-feather"

export function Menu(){
    return (
        <Container>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
                <Text>Home</Text>
            </ContainerIcon>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
                <Text>Home</Text>
            </ContainerIcon>
            <ContainerIcon>
                <Home color={THEME.colors.light_gray}></Home>
                <Text>Home</Text>
            </ContainerIcon>

        </Container>
    )
}