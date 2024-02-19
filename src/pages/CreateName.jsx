import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";
import HeaderBox from "../components/common/header/HeaderBox";
import OverlapSpan from "../components/createName/OverlapSpan";
import Button from "../components/common/Button";
import * as s from "../components/css/createName/createName";
import MyPageProvider from "../components/provider/MyPageProvider";
import NameInput from "../components/createName/NameInput";
export default function CreateName() {
  return (
    <>
      <BackHeader />
      <s.Section>
        <HeaderBox>
          <s.Img src={"img/tree.png"} alt="" />
          <s.TextBox>
            <span>서비스에서 불리고 싶은</span>
            <span>닉네임을 알려주세요</span>
          </s.TextBox>
        </HeaderBox>
        <SignUpProvider>
          <s.Div>
            <div>
              <s.InputBox>
                <MyPageProvider>
                  <NameInput />
                </MyPageProvider>
              </s.InputBox>
              <OverlapSpan overLapText={overLapText} />
            </div>
          </s.Div>
          <MyPageProvider>
            <Button text={"next"} />
          </MyPageProvider>
        </SignUpProvider>
      </s.Section>
    </>
  );
}

let overLapText = {
  span: {
    none: "한글, 영어 2~10자리까지 가능해요.",
    true: "이 닉네임으로 하시겠어요?",
  },
};
