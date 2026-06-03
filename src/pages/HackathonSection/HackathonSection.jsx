import styled from "styled-components";
import { useNavigate } from "react-router-dom";

import human from "../../assets/images/human.svg";
import Button from "../../components/Button/Button.jsx";

const Container = styled.div`
    width: 100vw;
    height: 1977px;
    position: relative;
    background: #FDF9FF;
    overflow: hidden;
`;

const Styled01 = styled.p`
    left: 684px;
    top: 103px;
    position: absolute;
`;

const Styled02 = styled.p`
    left: 684px;
    top: 138px;
    position: absolute;
`;


const Styled03 = styled.p`
    left: 684px;
    top: 175px;
    position: absolute;
`;

const StyledSpan = styled.span`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
`;

const StyledP = styled.p`
    left: 425px;
    top: 297px;
    position: absolute;
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

const ContentFrame = styled.div`
    width: 1099px;
    height: 647px;
    left: 170px;
    top: 903px;
    position: absolute;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
    gap: 45px;
    display: inline-flex;
`;

const FrameSpan = styled.span`
    color: black;
    font-size: 30px;
    font-family: Pretendard Variable;
    font-weight: 400;
    letter-spacing: 0.50px;
`;

const Frame = styled.div`
    align-self: stretch;
    padding-left: 65px;
    padding-right: 65px;
    padding-top: 52px;
    padding-bottom: 52px;
    background: white;
    overflow: hidden;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
    cursor: pointer;

    &:hover {
        background: #CDC1FF;
    }

    &:hover ${FrameSpan} {
        color: white;
    }
`;

const FrameP = styled.p`
    width: 967px;
    justify-content: center;
    display: flex;
    flex-direction: column;
`;

export default function HackathonSection() {

    const navigate = useNavigate();

    return (
        <Container>
            <Styled01><StyledSpan>.</StyledSpan></Styled01>
            <Styled02><StyledSpan>.</StyledSpan></Styled02>
            <Styled03><StyledSpan>.</StyledSpan></Styled03>
            <StyledP><StyledSpan>해커톤을 대비하며,</StyledSpan></StyledP>
            <ImageContainer>
                <Human src={human} />
            </ImageContainer>
            <ContentFrame>
                <Frame>
                    <FrameP><FrameSpan>1. 팀원과 인사를 나누어 보아요, 백엔드와 PO 트랙과도 꼭 친해지기!</FrameSpan></FrameP>
                </Frame>
                <Frame>
                    <FrameP><FrameSpan>2. 기획에 대한 아이디어를 마음껏 공유해 보아요, 건전한 논쟁은 언제나 환영!</FrameSpan></FrameP>
                </Frame>
                <Frame>
                    <FrameP><FrameSpan>3. 개발 분담을 본격적으로 시작해 보아요, 개발 세팅도 꼼꼼하게!</FrameSpan></FrameP>
                </Frame>
                <Frame>
                    <FrameP><FrameSpan>4. 퍼블리싱 이후에는 API 연동을 해 보아요, 애매하면 무조건 팀원에게 물어보기!</FrameSpan></FrameP>
                </Frame>
            </ContentFrame>
            <Button title="구독하기" onClick={() => navigate("/subscribe")} />
        </Container>
    );
}