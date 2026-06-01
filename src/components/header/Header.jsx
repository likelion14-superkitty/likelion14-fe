import styled from "styled-components";

const HeaderContainer = styled.div`
    width: 1440px;
    height: 96px;
    background: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 269px;
`;

const Title = styled.p`
    color: #4A25ED;
    font-size: 25px;
    font-family: Pretendard Variable;
    font-weight: 300;
    margin-left: 583px;
`;

const RightContainer = styled.div`
    width: 100%;
    height: 100%;
    justify-content: flex-start;
    align-items: center;
    gap: 91px;
    display: inline-flex;
`;

const Line = styled.div`    
    width: 0px;
    height: 51px;
    outline: 1px #4A25ED solid;
`;

const ButtonContainer = styled.div`
    justify-content: flex-start;    
    align-items: center;
    gap: 62px;
    display: inline-flex;
`;

const ButtonTitle = styled.p`
    color: #4A25ED;
    font-size: 30px;
    font-family: Pretendard Variable;
    font-weight: 300;
`;

export default function Header() {
    return (
        <HeaderContainer>
            <Title>skunivlikelion</Title>
            <RightContainer>
                <Line />
                <ButtonContainer>
                    <ButtonTitle>홈</ButtonTitle>
                    <ButtonTitle>구독하기</ButtonTitle>
                </ButtonContainer>
            </RightContainer>
        </HeaderContainer>
    );
}