import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 1613px;
    position: relative;
    overflow: hidden;
`;

const StyledP = styled.p`
    align-self: stretch;
    text-align: center;
    position: absolute;
    top: 121px;
    left: 648px;
`;

const StyledSpan = styled.span`
    color: #4A25ED;
    font-size: 75px;
    font-family: Pretendard Variable;
    font-weight: 600;
`;

const Styled01 = styled.p`
    position: absolute;
    left: 683px;
    top: 181px;
`;

const Styled02 = styled.p`
    position: absolute;
    left: 683px;
    top: 216px;
`;

const Styled03 = styled.p`
    position: absolute;
    left: 683px;
    top: 253px;
`;

const StyledTitle = styled.p`
    position: absolute;
    left: 394px;
    top: 394px;
`;

const FrameContent = styled.div`
    width: 1165px;
    height: 221px;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
    display: inline-flex;
    position: absolute;
    top: 572px;
    left: 133px;
`;

const Content = styled.div`
    width: 347px;
    height: 221px;
    background: #FDF9FF;
    overflow: hidden;
    border-radius: 20px;
    justify-content: center;
    align-items: center;
    gap: 10px;
    display: flex;
`;

const ContentSpan = styled.span`
    color: #4A25ED;
    font-size: 35px;
    font-family: Pretendard;
    font-weight: 500;
`;

const IntroduceFrame = styled.div`
    width: 894px;
    height: 466px;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    gap: 50px;
    display: inline-flex;
    position: absolute;
    top: 939px;
    left: 269px;
`;

const IntroduceP = styled.p`
    align-self: stretch;
    text-align: center;
`;

const IntroduceSpan = styled.span`
    color: black;
    font-size: 30px;
    font-family: Pretendard;
    font-weight: ${(props) => props.weight || "500"};
`;

export default function CollabSection() {
    return (
        <Container>
            <StyledP><StyledSpan>Q2</StyledSpan></StyledP>
            <Styled01><StyledSpan>.</StyledSpan></Styled01>
            <Styled02><StyledSpan>.</StyledSpan></Styled02>
            <Styled03><StyledSpan>.</StyledSpan></Styled03>
            <StyledTitle><StyledSpan>협업, 어떻게 하나요?</StyledSpan></StyledTitle>
            <FrameContent>
                <Content><ContentSpan>Component</ContentSpan></Content>
                <Content><ContentSpan>Teamwork</ContentSpan></Content>
                <Content><ContentSpan>Milestone</ContentSpan></Content>
            </FrameContent>
            <IntroduceFrame>
                <IntroduceP><IntroduceSpan>우선, 비슷한 디자인과 기능을 하는 최소 단위를 찾는 것이 중요해요!</IntroduceSpan></IntroduceP>
                <IntroduceP><IntroduceSpan>팀원끼리 <IntroduceSpan weight="700">컴포넌트</IntroduceSpan>를 분담하고 작업하는 걸 추천합니다.</IntroduceSpan></IntroduceP>
                <IntroduceP><IntroduceSpan>당연히, <IntroduceSpan weight="700">팀워크</IntroduceSpan> 요소도 빠질 수 없겠죠?</IntroduceSpan></IntroduceP>
                <IntroduceP><IntroduceSpan>브랜치나 함수 명명 규칙, 협업 전략에 대해 고민하는 시간을 가져야 합니다!</IntroduceSpan></IntroduceP>
                <IntroduceP><IntroduceSpan><IntroduceSpan weight="700">마일스톤</IntroduceSpan>을 철저히 지키고 의견 공유를 하는 것도 중요한데요,</IntroduceSpan></IntroduceP>
                <IntroduceP><IntroduceSpan>특히, 퍼블리싱과  API 연동을 하는 텀이 촉박할 수 있어서 부지런해야 합니다.</IntroduceSpan></IntroduceP>
            </IntroduceFrame>
        </Container>
    );
}