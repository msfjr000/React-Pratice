import styled from "styled-components";

export const Container = styled.div`
    width: 100%;
    background-color: rgba(255,133,155,0.1);
    margin-top: 30px;
    padding: 30px;
    border-radius: 20px;
    > h1 {
        color: white;
        font-weight: 500;
        font-size: 25px;
    }
    > p {
        height: 80px;
        overflow: auto;
        color: #999591;
    }
`;

export const Stars = styled.div`
margin-block: 5px;
    color: #FF859B;
    display: flex;
    gap: 10px;
    > svg {
        overflow: hidden;
        color: #FF859B;
    }
`;

export const Div = styled.div`
    display: flex;
`;