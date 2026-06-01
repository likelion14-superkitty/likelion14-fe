import styled from "styled-components";
import LogoImage from "../../assets/images/footerSKU.png";
import SKONImage from "../../assets/icons/footerSKON.png";

const Footer = () => {
  return (
    <FooterContainer>
      <LeftSection>
        <Logo src={LogoImage} alt="SKU Likelion Footer Logo" />
      </LeftSection>

      <RightSection>
        <SKON
          src={SKONImage}
          alt="Footer Icon"
        />
      </RightSection>
    </FooterContainer>
  );
};

export default Footer;

const FooterContainer = styled.footer`
  width: 1440px;
  height: 230px;
  background: #4A25ED;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 70px clamp(32px, 6vw, 90px);
  }
`;  

const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
`;

const Logo = styled.img`
  width: 636px;
  height: 60px;
  padding: 63px, 83px, 741px;
`;

const AddressText = styled.p`
  margin-top: 20px;
  color: white;
  font-size: clamp(12px, 0.85vw, 18px);
  font-weight: 700;
  line-height: 1.7;
  max-width: 900px;

  @media (max-width: 768px) {
    text-align: center;
  }
`;

const RightSection = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const SKON = styled.img`
  width: 105px;
  height: 110px;
`;