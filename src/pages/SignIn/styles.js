import styled from "styled-components";
import backgroundImg from '../../assets/movie.png'

export const Container = styled.div`
    display: flex;
    justify-content: space-between;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    margin-left: 10%;
    font-family: "Roboto Slab", system-ui;
    > a {
        display: flex;
        align-items: center;
        text-decoration: none;
        justify-content: center;
        width: 300px;
        margin-top: 10px;
        color: #FF859B;
    }
    > h1 {
        color: #FF859B;
        font-size: 2.5rem;
    }
    > h2 {
        color: white;
        margin-block: 30px;
    }
    > p {
        color: white;
        font-size: 12px;
    }
    > button {
        margin-top: 10px;
        height: 56px;
        width: 300px;
        background-color: #FF859B;
        border:none;
        border-radius: 5px;
    }
`;

export const Img = styled.div`
    width: 60%;
    height: 100vh;
    background: url(${backgroundImg}) no-repeat center center;
    background-size: cover;
`;