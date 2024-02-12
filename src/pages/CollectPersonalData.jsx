import HeaderBox from "../components/common/header/HeaderBox";
import Button from "../components/common/Button";
import TermsBox from "../components/collectPersonalData/TermsBox";
import styled from "styled-components";
import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";

export default function CollectPersonalData() {
  return (
    <>
      <SignUpProvider>
        <BackHeader />
        <Section>
          <HeaderBox>
            <Img src={"img/tree.png"} alt="" />
            <TextBox>
              <span>서비스 이용을 위해</span>
              <span>{"약관 동의를 해주세요 :)"}</span>
            </TextBox>
          </HeaderBox>
          <Button text={"agree"} />
          <TermsBox />
          <Button text={"next"} />
        </Section>
      </SignUpProvider>
    </>
  );
}

const Section = styled.section`
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

const Img = styled.img`
  margin: 0 10px 0 24px;
  margin-right: 10px;
  width: 20px;
  height: 38px;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
