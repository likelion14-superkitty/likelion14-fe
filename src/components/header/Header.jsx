import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const HeaderContainer = styled.div`
    width: 100vw;
    height: 96px;
    position: relative;
`;

const TitleContainer = styled.p`
    left: 583px;
    top: 29px;
    position: absolute;
`;

const Title = styled.span`
    color: #4A25ED;
    font-size: 25px;
    font-family: Pretendard Variable;
    font-weight: 300;
`;

const RightContainer = styled.div`
    left: 997px;
    top: 22px;
    position: absolute;
    align-items: center;
    gap: 91px;
    display: flex;
`;

const Line = styled.div`
    width: 51px;
    height: 0px;
    transform: rotate(90deg);
    outline: 1px #4A25ED solid;
    outline-offset: -0.50px;
`;

const ButtonContainer = styled.div`
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 62px;
`;

const ButtonTitle = styled.span`
    color: #4A25ED;
    font-size: 30px;
    font-family: Pretendard Variable;
    font-weight: 300;
`;

export default function Header() {

    const navigate = useNavigate();

    return (
        <HeaderContainer>
            <TitleContainer><Title onClick={() => navigate("/")}>skunivlikelion</Title></TitleContainer>
            <RightContainer>
                <Line />
                <ButtonContainer>
                    <ButtonTitle onClick={() => navigate("/home")}>홈</ButtonTitle>
                    <ButtonTitle onClick={() => navigate("/subscribe")}>구독하기</ButtonTitle>
                </ButtonContainer>
            </RightContainer>
        </HeaderContainer>
    );
}