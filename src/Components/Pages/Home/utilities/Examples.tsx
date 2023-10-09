import { Card, ExamplesContainer, Section, TitleExamples } from "./examples.styles";

const Examples = () => {
    return (
        <ExamplesContainer>
            <TitleExamples>Ejemplo de ToDo's</TitleExamples>
            <Section>
                <Card>Leer 20 Minutos al Día</Card>
                <Card>Hacer Ejercicio</Card>
                <Card>Meditar 3 veces a la semana</Card>
                <Card>Planificar la Semana</Card>
                <Card>Beber Suficiente Agua</Card>
                <Card>Completar Presentación del Trabajo</Card>
            </Section>
        </ExamplesContainer>
    )
}

export default Examples;