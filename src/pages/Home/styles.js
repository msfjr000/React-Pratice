import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    font-family: "Roboto Slab", system-ui;
`;

export const Main = styled.div`
    display: flex;
    justify-content: space-between;
    width: 93%;
    margin-top: 60px;
    > h1 {
        font-weight: 400;
        color: white;
    }
    >Button {
        margin: 0;
        padding: 0;
        width: 250px;
        height: 45px
    }
`;

export const Div = styled.div`
    width: 93%;
    height: 60vh;
    overflow: auto;
`;