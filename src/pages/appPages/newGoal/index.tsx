import { useState } from "react";
import { Header } from "../../../components/header";
import {
    Container,
    ContainerMain,
    ContainerStepOne,
    ContainerStepTwo,
    TextQuestion,
    ContainerLimitTime,
    InputLimitTime,
    ButtonTime,
    Input,
    ContainerImportance,
    Option,
    InputAbout,
    Button
} from "./style";

export function NewGoal() {
    const [step, setStep] = useState("stepOne")
    return (
        <Container>
            <Header />
            <ContainerMain
            >
                <ContainerStepOne className={step === "stepOne" ? "" : "hidden"}>

                    <TextQuestion>Qual será o nome da sua meta?</TextQuestion>
                    <Input />

                    <TextQuestion>Qual a importância dessa meta para você?</TextQuestion>
                    <ContainerImportance>
                        <Option>Alta</Option>
                        <Option>Media</Option>
                        <Option>Baixa</Option>
                    </ContainerImportance>

                    <TextQuestion>Conte um pouco sobre essa meta para nós!</TextQuestion>
                    <InputAbout />

                    <Button
                        onClick={() => setStep("stepTwo")}
                    >Continue</Button>

                </ContainerStepOne>


                <ContainerStepTwo className={step === "stepTwo" ? "" : "hidden"}>
                    <TextQuestion>Qual valor você total da sua meta?</TextQuestion>
                    <Input />
                    <TextQuestion>Em quanto tempo você deseja alcançar essa meta?</TextQuestion>
                    <ContainerLimitTime>
                        <InputLimitTime></InputLimitTime>
                        <ButtonTime>Meses</ButtonTime>
                        <ButtonTime>Anos</ButtonTime>

                    </ContainerLimitTime>

                    <TextQuestion>Qual valor você está iniciando sua meta?</TextQuestion>
                    <Input />

                    <Button>Criar</Button>
                </ContainerStepTwo>
            </ContainerMain>

        </Container>
    )
}