import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    background-color:#262529;
    gap: 10px;
    margin-block: 2px;
    padding-left: 5px;
    width: 300px;
    height: 56px;
    border-top-right-radius: 10px;
    border-top-left-radius: 10px;
    border-bottom-right-radius: 10px;
    border-bottom-left-radius: 10px;
    > input {
        background-color: #262529;
        border: none;
        width: 100%;
        height: 90%;
        border-top-right-radius: 10px;
        border-top-left-radius: 10px;
        border-bottom-right-radius: 10px;
        border-bottom-left-radius: 10px;
        color: white;
    }
    input::placeholder {
        color: #948F99;
    }
    > svg {
        color: #948F99;
    }
`;