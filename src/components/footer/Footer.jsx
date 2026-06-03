import styled from "styled-components";
import rights from "../../assets/images/rights.svg";
import skon from "../../assets/icons/skon.svg";

const FooterContainer = styled.div`
    width: 100vw;
    height: 270px;
    position: relative;
    background: #4A25ED;
    overflow: hidden;
`;

const RightImage = styled.img`
    position: absolute;
    width: 636px;
    height: 84px;
    top: 83px;
    left: 63px;
`;

const LogoImage = styled.img`
    position: absolute;
    width: 105px;
    height: 179px;
    top: 33px;
    left: 1263px;
`;

export default function Footer() {
    return (
        <FooterContainer>
            <RightImage src={rights} />
            <LogoImage src={skon} />
        </FooterContainer>
    );
}