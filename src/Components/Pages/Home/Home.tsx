import { Link } from "react-router-dom"
import { Button, ButtonContainer, Description } from "./home.styles"
import Benefits from "./utilities/Benefits"
import Examples from "./utilities/Examples"

const Home = () => {
    return (
        <div>
            <div>
                <Description>
                    TaskFlow es una aplicación de gestión de tareas que te ayuda a mantener un flujo eficiente en tu día a día. Organiza tus tareas en un flujo intuitivo, marcando tu progreso a medida que avanzas. 
                    Ya sea en el trabajo, en la escuela o en tu vida personal, TaskFlow te permite visualizar y administrar tus tareas de manera clara y efectiva, para que puedas alcanzar tus objetivos sin perder el rumbo. 
                    Simplifica tu vida y maximiza tu productividad con TaskFlow.
                </Description>
            </div>
            <Benefits />
            <Examples />
            <ButtonContainer>            
                <Link 
                    style={{textDecoration: "none", color: "#0E4A8C"}} 
                    to={"/todosPage"} >
                        <Button>¡Empecemos!</Button>
                </Link>
            </ButtonContainer>
        </div>
    )
}

export default Home