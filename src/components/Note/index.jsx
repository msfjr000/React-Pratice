import { Container,Stars,Div} from "./styles";
import { FiStar } from "react-icons/fi";
import { Tag } from "../Tag";

export function Note ({title,text,...rest}) {
    return (
        <Container {...rest}>
            <h1>{title}</h1>
            <Stars>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar fill="#FF859B"/>
                <FiStar/>
            </Stars>
            <p>{text}</p>
            <Div>
            <Tag title="Ficção Científica"/>
            <Tag title="Drama"/>
            <Tag title="Familia"/>
            </Div>
        </Container>
    )
}