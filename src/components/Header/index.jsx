import { Container,Div,DivInside } from "./styles";

export function Header () {
    return (
        <Container>
            <h1>RocketMovies</h1>
            <input type="text" placeholder="Pesquisar pelo título"/>
            <Div>
                <DivInside>
                <p>Mário Sérgio</p>
                <a href="#">Sair</a>
                </DivInside>
                <img src="https://github.com/msfjr000.png" alt="" />
            </Div>
        </Container>
    )
}