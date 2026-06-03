import styled from "styled-components";

const ButtonTitle = styled.span`
    color: #4A25ED;
    font-size: 35px;
    font-family: Pretendard Variable;
    font-weight: 500;
`;

const Frame = styled.button`
    width: 349px;
    height: 111px;
    background: white;
    overflow: hidden;
    border-radius: 100px;
    outline: 2px #4A25ED solid;
    outline-offset: -2px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    top: 1731px;
    left: 520px;
    position: absolute;
    cursor: pointer;

    &:hover {
        background: #4A25ED;
    }

    &:hover ${ButtonTitle} {
        color: white;
    }
`;

export default function Button({title, onClick}) {
    return (
        <Frame onClick={onClick}><ButtonTitle>{title}</ButtonTitle></Frame>
    );
}