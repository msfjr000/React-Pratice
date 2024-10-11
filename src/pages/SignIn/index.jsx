import { Input } from '../../components/input/index.jsx'
import {Form,Container,Img} from './styles.js'
import { FiUser,FiMail,FiLock,FiArrowLeft } from 'react-icons/fi'
import { Link } from 'react-router-dom'

export function SignIn () {
    return (
        <Container>
            <Form>
            <h1>RocketMovies</h1>
            <p>Aplicação para acompanhar tudo que assistir</p>
            <h2>Faça seu login</h2>
            <Input placeholder="E-mail" icon={FiMail} type="text"/>
            <Input placeholder="Senha" icon={FiLock} type="password"/>
            <button>Cadastrar</button>
            <Link to="/SignUp"> Criar Conta</Link>
            </Form>
            <Img/>
        </Container>
    )
}