import { Container,Header,Main,Img } from "./styles";
import { FiCamera,FiMail,FiLock,FiArrowLeft } from "react-icons/fi";
import { GoPerson } from "react-icons/go";
import {Input} from "../../components/input"
import { Button } from "../../components/Button";
import { Link } from "react-router-dom";

export function Perfil () {
    return (
        <Container>
            <Header><Link to="/"><FiArrowLeft/> Voltar</Link></Header>
            <Main>
                <Img>
                <img src="https://github.com/msfjr000.png" alt="" />
                <div>
                <FiCamera/>
                </div>
                </Img>
                <Input icon={GoPerson} placeholder="Usuário"/>
                <Input icon={FiMail} placeholder="E-mail"/>
                <Input icon={FiLock} placeholder="Senha Atual"/>
                <Input icon={FiLock} placeholder="Nova senha"/>
                <Button title="Salvar"/>
            </Main>
        </Container>
    )
}