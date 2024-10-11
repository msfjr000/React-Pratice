import styled from "styled-components";


export const Container = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    padding-inline: 50px;
    height: 116px;
    padding-block: 30px;
    font-family: "Roboto Slab", system-ui;
    border-bottom: 1px solid #3E3B47 ;
    > h1 {
        color: #FF859B;
    }
    > input {
        width: 630px;
        border: none;
        border-radius: 5px;
        background-color: #262529;
        padding-left: 10px;
    }
    input::placeholder {
        color: #948F99;
    }
    `;

export const Div = styled.div`
    display: flex;
    > p {
        color: white;
        font-family: "Roboto Slab", system-ui;
    }
    > img {
        width: 50px;
        border-radius: 50%;
    }
`;

export const DivInside = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-right: 5px;
    > a {
        text-decoration: none;
        text-align: end;
    }
    p {
        color: white;
        font-size: 15px;
    }
    a {
        color: #948F99;
        font-size: 13px;
    }
`;