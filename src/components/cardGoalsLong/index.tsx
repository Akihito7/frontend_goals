import {
    Container,
    Icon,
    ContainerText,
    Title,
    Goals,
    PizzaProgress,
    ContainerProgress
} from "./style";

export function CardGoalsLong() {
    return (
        <Container>
            <Icon src="/device.png" />

            <ContainerText>
                <Title>
                    Notebook
                </Title>
                <Goals>
                    R$3500,99
                </Goals>
            </ContainerText>

            <ContainerProgress>

                <PizzaProgress />
            </ContainerProgress>

        </Container>
    )
}