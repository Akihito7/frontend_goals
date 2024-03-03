import {
    ButtonAddNewGoal,
    Container,
    ContainerCardGoals,
    ContainerMain,
    YourGoals
} from "./style";

import { CardGoals } from "../../../components/cardGoals";
import { Header } from "../../../components/header";
import { Menu } from "../../../components/menu";

import { Plus } from 'react-feather';
import { THEME } from "../../../theme";

export function Home() {
    return (
        <Container>
            <Header />

            <ContainerMain>
                <YourGoals>Suas metas</YourGoals>
                <ContainerCardGoals>
                    <CardGoals />
                    <CardGoals />
                    <CardGoals />
                    <CardGoals />

                    <ButtonAddNewGoal>
                        <Plus size={40} color={THEME.colors.purple} />
                    </ButtonAddNewGoal>
                </ContainerCardGoals>
            </ContainerMain>

            <Menu />
        </Container>
    )
}