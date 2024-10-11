import { Container,Main,Marcadores } from "./styles";
import { FiArrowLeft,FiX, FiPlus } from "react-icons/fi";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { Tag } from "../../components/Tag";
import { Link } from "react-router-dom";

export function CreateMovie () {
    return (
        <Container>
            <Header/>
            <Main>
                <div>
                    <Link to="/"><FiArrowLeft/> Voltar </Link>
                    <h1>Novo Filme</h1>
                </div>
                <div>
                    <Input placeholder="Título"/>
                    <Input placeholder="Sua nota (de 0 a 5)"/>
                </div>
                <textarea  placeholder="Observações"></textarea>
                <Marcadores>
                    <h1>Marcadores</h1>
                    <section>
                        <div id="gray"><p>React</p><FiX/> </div>
                        <div><p>Novo Marcador</p><FiPlus/> </div>
                    </section>
                </Marcadores>
                <div>
                <button id="black">Excluir Filme</button>
                <button> Salvar Alterações</button>
                </div>
            </Main>
        </Container>
    )
}