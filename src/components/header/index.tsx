import { Container, ContainerText, ContainerWelcome, Name, Profile, Goals } from "./style";


export function Header() {
    return (
        <Container>
            <ContainerWelcome>
                <Profile src="https://github.com/akihito7.png"></Profile>

                <ContainerText>
                    <Name>Olá, Guilherme</Name>
                    <Goals>Alcance suas metas</Goals>
                </ContainerText>



            </ContainerWelcome>

        

        </Container>
    )
}