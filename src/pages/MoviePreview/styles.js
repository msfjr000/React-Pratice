import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    color: white;
    font-family: "Roboto Slab", system-ui;
`;

export const Main = styled.div`
    margin-top: 50px;
    width: 80%;
    > div:first-child {
        a {
            display: flex;
            text-decoration: none;
            align-items: center;
            color: #FF859B;
        }
    }
    > div:first-child div {
        display: flex;
        align-items: center;
        gap: 5px;
        h1 {
            margin-block: 30px;
        }
    }
    > div:nth-child(2) {
        margin-bottom: 40px;
        display: flex;
        gap: 10px;
        align-items: center;
        img {
            width: 20px;
            border-radius: 50%;
        }
        svg {
            color: #FF859B;
        }
    }
    > div:nth-child(3) {
        display: flex;
        gap: 10px;
        div {
            display: flex;
            justify-content: center;
            align-items: center;
            padding-block: 15px;
            font-size: 14px;
            background-color: #282124;
        }
    }
    > div:nth-child(4) {
        margin-top: 30px;
        margin-bottom: 50px;
    }
`;

export const Stars = styled.div`
    margin-left: 20px;
    svg {
        color: #FF859B;
    }
`;