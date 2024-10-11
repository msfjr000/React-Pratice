import styled from "styled-components";

export const Container = styled.div`
`;

export const Header = styled.header`
    height: 20vh;
    background-color: rgba(255,133,155,0.05); 
    display: flex;   
    > a {
        text-decoration: none;
        display: flex;
        align-items: center;
        color: #FF859B;
        margin-left: 350px;
    }
`;

export const Main = styled.div`
    margin-top: -100px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > div:nth-child(3) {
        margin-bottom: 20px;
    }
`;

export const Img = styled.div`
    position: relative;
    margin-bottom: 20px;
    > img {
        width: 250px;
        border-radius: 50%;
    }
    > div {
        position: absolute;
        background-color: #FF859B;
        width: 50px;
        height: 50px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 50%;
        right: 0;
        bottom: 0;
    }
    > svg {
        width: 50px;
        height: 50px;
    }
`;