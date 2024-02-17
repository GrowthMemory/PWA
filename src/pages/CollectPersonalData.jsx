import HeaderBox from "../components/common/header/HeaderBox";
import Button from "../components/common/Button";
import TermsBox from "../components/collectPersonalData/TermsBox";
import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";
import * as s from "../components/css/collectPersonalDate/collectPersonalData";
import MyPageProvider from "../components/provider/MyPageProvider";

export default function CollectPersonalData() {
  return (
    <>
      <BackHeader />
      <s.Section>
        <HeaderBox>
          <s.Img src={"img/tree.png"} alt="" />
          <s.TextBox>
            <span>서비스 이용을 위해</span>
            <span>{"약관 동의를 해주세요 :)"}</span>
          </s.TextBox>
        </HeaderBox>
        <SignUpProvider>
          <MyPageProvider>
            <Button text={"agree"} />
          </MyPageProvider>
          <TermsBox />
          <MyPageProvider>
            <Button text={"next"} />
          </MyPageProvider>
        </SignUpProvider>
      </s.Section>
    </>
  );
}
