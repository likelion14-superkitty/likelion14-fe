import styled from "styled-components";

const Container = styled.div`
    width: 100vw;
    height: 1315px;
    position: relative;
    background: #4A25ED;
    overflow: hidden;
`;

const FirstP = styled.p`
    left: 434px;
    top: 212px;
    position: absolute;
`;

const SecondP = styled.p`
    left: 254px;
    top: 350px;
    position: absolute;
`;

const ThirdP = styled.p`
    left: 813px;
    top: 350px;
    position: absolute;
`;

const StyledSpan = styled.span`
    color: ${(props) => props.color || "white"};
    font-size: ${(props) => props.size || "120px"};
    font-family: Pretendard Variable;
    font-weight: 600;
`;

const SubImage = styled.img`
    width: 230px;
    height: 240px;
    left: 891.08px;
    top: 658.40px;
    position: absolute;
`;

const MainImage = styled.img`
    width: ${(props) => props.$width || "591px"};
    height: ${(props) => props.$height || "624px"};
    left: ${(props) => props.$left || "455.21px"};
    top: ${(props) => props.$top || "525px"};
    position: absolute;
    transform: ${(props) => props.$transform || "rotate(16deg)"};
    transform-origin: top left;
`;

export default function TopSection({first, second, third, mainImage, subImage, width, height, top, left, transform}) {
    return (
        <Container>
            <FirstP><StyledSpan size="90px">{first}</StyledSpan></FirstP>
            <SecondP><StyledSpan color="#FF8BD4">{second}</StyledSpan></SecondP>
            <ThirdP><StyledSpan>{third}</StyledSpan></ThirdP>
            {mainImage && <MainImage src={mainImage} $width={width} $height={height} $top={top} $left={left} $transform={transform} />}
            {subImage && <SubImage src={subImage} />}
        </Container>
    );
}