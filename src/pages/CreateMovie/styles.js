import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    font-family: "Roboto Slab", system-ui;
`;

export const Main = styled.div`
    overflow: auto;
    width: 80%;
    > div:first-child {
        a {
            margin-top: 40px;
            text-decoration: none;
            display: flex;
            align-items: center;
            color: #FF859B;
        }
        h1 {
            color: white;
            margin-block: 30px;
        }
    }
    > div:nth-child(2) {
        display: flex;
        gap: 50px;
        margin-bottom: 40px;
        div {
            width: 100%;
            height: 50px;
        }
    }
    > textarea {
        background-color: #262529;
        border: none;
        width: 100%;
        height: 30vh;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        color: white;
        resize: none;
        padding-top: 10px;
        padding-left: 10px;
        font-size: 14px;
    }
    textarea::placeholder {
        font-size: 14px;
        font-family: "Roboto Slab", system-ui;
        color: #948F99;
        font-weight: 400;
    }
    div:nth-child(5) {
        display: flex;
        gap: 30px;
    }
    #black {
        background-color: black;
        color: #FF859B;
    }
    button {
        margin-top: 30px;
        width: 100%;
        height: 50px;
        border: none;
        border-radius: 10px;
        color: #312E38;
        background-color: #FF859B;
        font-weight: bold;
    }
`;

export const Marcadores = styled.div`
    h1 {
        color: #999591;
        font-size: 20px;
        margin-top: 40px;
        margin-bottom: 20px;
        font-weight: 400;
    }
    section {
        background-color: black;
        border-radius: 10px;
        display: flex;  
        gap: 20px;
        height: 70px;
        padding-block: 10px;
        #gray {
            background-color: #262529;
            color: white;
            border: none;
            margin-left: 20px;
        }
        div {
            background-color: transparent;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10px;
            color: #948F99;
            border: 2px dashed white;
            padding: 10px;
            gap: 5px;
            svg {
                color: #FF859B;
            }
        }
    }
`;

