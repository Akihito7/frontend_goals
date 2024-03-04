import { CardGoalsLong } from "../../../components/cardGoalsLong";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";

import {
    Container,
    Main,
    HighlightGoal,
    Icon,
    Title,
    OtherText,
    Description,
    BarProgress,
    ButtonAddMoney,
    OtherGoals,
    ContainerGoals,
    ContainerGoal,


} from "./style";

export function Goals() {
    return (
        <Container>
            <Header />

            <Main>

                <HighlightGoal>
                    <ContainerGoal>
                        <Icon src="/device.png"></Icon>
                        <Title>Notebook</Title>
                        <Description>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Fuga totam quod porro cumque aliquid doloremque delectus beatae corrupti. Nostrum alias nisi perferendis deserunt ab atque sed repellendus quibusdam rem ipsam?</Description>
                        <BarProgress></BarProgress>
                        <ButtonAddMoney>Add money</ButtonAddMoney>

                    </ContainerGoal>
                </HighlightGoal>


                <OtherGoals>
                    <ContainerGoals>
                        <OtherText>Outras metas</OtherText>
                        <CardGoalsLong />
                        <CardGoalsLong />
                        <CardGoalsLong />
                    </ContainerGoals>

                </OtherGoals>
            </Main>

            <Menu></Menu>
        </Container >
    )
}