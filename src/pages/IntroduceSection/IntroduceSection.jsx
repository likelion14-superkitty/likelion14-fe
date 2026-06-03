import styled from "styled-components";

import hyj from "../../assets/images/hyj.svg";
import kwh from "../../assets/images/kwh.svg";
import html from "../../assets/images/html.svg";
import css from "../../assets/images/css.svg";
import js from "../../assets/images/js.svg";

const Container = styled.div`
    width: 100vw;
    height: 1608px;
    position: relative;
    overflow: hidden;
`;

const StyledQ1 = styled.p`
    left: 652px;
    top: 122px;
    position: absolute;
`;

const StyledSpan = styled.span`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
`;

const Styled01 = styled.p`
    left: 687px;
    top: 182px;
    position: absolute;
`;

const Styled02 = styled.p`
    left: 687px;
    top: 217px;
    position: absolute;
`;

const Styled03 = styled.p`
    left: 687px;
    top: 254px;
    position: absolute;
`;

const StyledP = styled.p`
    left: 398px;
    top: 395px;
    position: absolute;
`;

const IntroduceFrame = styled.div`
    width: 1051px;
    height: 349px;
    padding-left: 318px;
    padding-right: 318px;
    padding-top: 138px;
    padding-bottom: 138px;
    left: 194px;
    top: 573px;
    position: absolute;
    background: #FDF9FF;
    overflow: hidden;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: inline-flex;
`;

const ImageFrame = styled.div`
    justify-content: flex-start;
    align-items: center;
    gap: 88px;
    display: inline-flex;
    position: absolute;
    top: 1010px;
    left: 197px;
`;

const ImageContent = styled.div`
    width: 285px;
    height: 293px;
    position: relative;
    background: #4A25ED;
    border-radius: 20px;
    cursor: pointer;
    transition: 0.3s ease;

    &:nth-child(1):hover {
        transform: translateY(-20px);
    }

    &:nth-child(2):hover {
        transform: rotate(-5deg) scale(1.05);
    }

    &:nth-child(3):hover {
        animation: shake 0.4s;
    }

    @keyframes shake {
        0% { transform: rotate(0deg); }
        25% { transform: rotate(3deg); }
        50% { transform: rotate(-3deg); }
        75% { transform: rotate(3deg); }
        100% { transform: rotate(0deg); }
    }
`;

const Yoonji = styled.img`
    width: 135px;
    height: 135px;
    position: absolute;
    top: 20px;
    left: 20px;
`;

const Woohyun = styled.img`
    width: 150px;
    height: 150px;
    position: absolute;
    bottom: 20px;
    right: 20px;
`;

const IntroduceSpan1 = styled.span`
    color: black;
    font-size: 24px;
    font-family: Pretendard Variable;
    font-weight: 600;
    position: absolute;
    top: 70px;
    left: 170px;
`;

const IntroduceSpan2 = styled.span`
    color: black;
    font-size: 24px;
    font-family: Pretendard Variable;
    font-weight: 600;
    position: absolute;
    bottom: 60px;
    right: 200px;
    text-align: right;
`;

const Html = styled.img`
    position: absolute;
    top: 45px;
    left: 45px;
    width: 200px;
    height: 200px;
`;

const Css = styled.img`
    position: absolute;
    top: 45px;
    left: 45px;
    width: 200px;
    height: 200px;
`;

const Js = styled.img`
    position: absolute;
    top: 45px;
    left: 45px;
    width: 200px;
    height: 200px;
`;

export default function IntroduceSection() {
    return (
        <Container>
            <StyledQ1><StyledSpan>Q1</StyledSpan></StyledQ1>
            <Styled01><StyledSpan>.</StyledSpan></Styled01>
            <Styled02><StyledSpan>.</StyledSpan></Styled02>
            <Styled03><StyledSpan>.</StyledSpan></Styled03>
            <StyledP><StyledSpan>프론트엔드에 대하여</StyledSpan></StyledP>
            <IntroduceFrame>
                <Yoonji src={hyj} /><IntroduceSpan1>안녕하세요 소프트웨어학과 23학번 홍윤지 입니다.<br />멋쟁이사자처럼에서 프론트엔드를 배우고 있고 향후 멋진 개발자로 성장하고 싶습니다!</IntroduceSpan1>
                <Woohyun src={kwh} /><IntroduceSpan2>안녕하세요 소프트웨어학과 23학번 김우현입니다.<br />멋쟁이사자에서 프론트엔드를 맡고있고 열심히 실력 기를 예정입니다!</IntroduceSpan2>
            </IntroduceFrame>
            <ImageFrame>
                <ImageContent>
                    <Html src={html} />
                </ImageContent>
                <ImageContent>
                    <Css src={css} />
                </ImageContent>
                <ImageContent>
                    <Js src={js} />
                </ImageContent>
            </ImageFrame>
        </Container>
    );
}