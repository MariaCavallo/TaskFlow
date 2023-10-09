import { ListContainer, Lists, Span, TitleBenefits, BenefitsContainer } from "./benefits.styles"

const Benefits = () => {
    return (
        <BenefitsContainer>
            <TitleBenefits>Beneficios Principales</TitleBenefits>
            <ListContainer>
                <Lists>
                    <Span>Gestión Eficaz de Tareas: </Span><br />
                    Puedes crear, editar y eliminar tareas según tus necesidades, lo que te ayuda a mantener un control total sobre tus responsabilidades diarias.
                </Lists>
                <Lists>
                    <Span>Priorización Flexible:</Span><br />
                    Establecer la prioridad de tus tareas, lo que te ayuda a identificar rápidamente las tareas más importantes y asegurarte de que se aborden primero.                </Lists>
                <Lists>
                    <Span>Recordatorios y Fechas Límite:</Span><br />
                    Esto te ayuda a cumplir con plazos importantes y a mantenerte al tanto de tus responsabilidades pendientes.
                </Lists>
                <Lists>
                    <Span>Seguimiento del Progreso:</Span><br />
                    Puedes ver qué tareas están en proceso, cuáles están completas y cuáles necesitan más atención.
                </Lists>
                <Lists>
                    <Span>Facilita la Organización: </Span><br />
                    Organizar tus tareas en categorías o listas, lo que te ayuda a mantener un enfoque claro en diferentes áreas de tu vida o trabajo.                </Lists>
                <Lists>
                    <Span>Reducción del Estrés:</Span><br />
                    Al tener tus tareas organizadas y planificadas, puedes reducir el estrés asociado con la posibilidad de olvidar tareas importantes.
                </Lists>
            </ListContainer>
        </BenefitsContainer>
    )
}

export default Benefits