import { useState } from "react";
import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import human from "../../assets/images/human.svg";
import rightvector from "../../assets/icons/rightvector.svg";
import leftvector from "../../assets/icons/leftvector.svg";
import Button from "../../components/Button/Button.jsx";

const Container = styled.div`
    width: 100vw;
    height: 1974px;
    position: relative;
    background: #FDF9FF;
    overflow: hidden;
`;

const Styled01 = styled.p`
    position: absolute;
    left: 684px;
    top: 103px;
`;

const Styled02 = styled.p`
    position: absolute;
    left: 684px;
    top: 138px;
`;

const Styled03 = styled.p`
    position: absolute;
    left: 684px;
    top: 175px;
`;

const StyledSpan = styled.span`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
`;

const Title = styled.p`
    position: absolute;
    left: 293px;
    top: 299px;
`;

const ImageContainer = styled.div`
    width: 1000px;
    height: 347px;
    left: 220px;
    top: 460px;
    position: absolute;
    background: white;
    overflow: hidden;
    border-radius: 20px;
`;

const Human = styled.img`
    width: 306px;
    height: 344px;
    left: 322px;
    top: 27px;
    position: absolute;
`;

const SessionContainer = styled.div`
    width: 1165px;
    height: 221px;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
    display: inline-flex;
    position: absolute;
    top: 925px;
    left: 137px;
`;

const SessionBox = styled.div`
    width: 347px;
    height: 221px;
    background: white;
    overflow: hidden;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
`;

const SessionTitle = styled.span`
    color: #4A25ED;
    font-size: 35px;
    font-family: Pretendard;
    font-weight: 500;
`;

const sessions = [
    "1주차 세션",
    "2주차 세션",
    "3주차 세션",
    "4주차 세션",
    "5주차 세션",
    "6주차 세션",
    "7주차 세션",
    "8주차 세션",
    "9주차 세션",
];

const NextButton = styled.img`
    width: 23px;
    height: 47px;
    position: absolute;
    top: 1027px;
    left: 1344px;
    cursor: pointer;
`;

const PrevButton = styled.img`
    width: 23px;
    height: 47px;
    position: absolute;
    top: 1027px;
    left: 70px;
    cursor: pointer;
`;

export default function SessionSection() {

    const navigate = useNavigate();
    const [startIndex, setStartIndex] = useState(0);

    const nowSessions = sessions.slice(startIndex, startIndex + 3);

    // 다음 버튼 누를 시
    const handleNextClick = () => {
        setStartIndex((prevIndex) => {
            const nextIndex = prevIndex + 3;
            return nextIndex >= sessions.length ? 0 : nextIndex;
        });
    };

    // 이전 버튼 누를 시 
    const handlePrevClick = () => {
        setStartIndex((prevIndex) => {
            const prev = prevIndex - 3;
            return prev < 0 ? 0 : prev;
        });
    };

    return (
        <Container>
            <Styled01><StyledSpan>.</StyledSpan></Styled01>
            <Styled02><StyledSpan>.</StyledSpan></Styled02>
            <Styled03><StyledSpan>.</StyledSpan></Styled03>
            <Title><StyledSpan>이전 세션 자료들을 복습해요!</StyledSpan></Title>
            <ImageContainer>
                <Human src={human} />
            </ImageContainer>
            {startIndex > 0 && (
                <PrevButton src={leftvector} onClick={handlePrevClick} />
            )}
            <SessionContainer>
                {nowSessions.map((session) => (
                    <SessionBox key={session}><SessionTitle>{session}</SessionTitle></SessionBox>
                ))}
            </SessionContainer>
            {startIndex < sessions.length - 3 && (
                <NextButton src={rightvector} onClick={handleNextClick} />
            )}
            <Button title="가입하기" onClick={() => window.open("https://skulikelion.com/", "_blank")} />
        </Container>
    );
}