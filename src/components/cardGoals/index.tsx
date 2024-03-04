import { BarProgress, Container, Goals, Icon, Title } from "./style";


export function CardGoals() {
    return (
        <Container>
            <Icon src="device.png" />
            <Title>Notebook</Title>
            <Goals>R$3500,99</Goals>
            <BarProgress></BarProgress>
        </Container>
    )
}