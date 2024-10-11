import { Container,Form,Img } from "./styles";
import { Input } from "../../components/input";
import { FiUser,FiMail,FiLock,FiArrowLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

export function SignUp () {
    return (
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Crie sua conta</h2>
            <Input placeholder="Nome" icon={FiUser} type="text"/>
            <Input placeholder="E-mail" icon={FiMail} type="text"/>
            <Input placeholder="Senha" icon={FiLock} type="password"/>
            <button>Cadastrar</button>
            <Link to="/SignIn"><FiArrowLeft/> Voltar para o login</Link>
            </Form>
            <Img/>
        </Container>
    )
}