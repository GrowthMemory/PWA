import { useState } from "react";
import { useImmer } from "use-immer";
import { SignUpContext } from "../context/SignUpContext";

export default function SignUpProvider(props) {
  const [headerText, setHeaderText] = useState(0); // <- 1씩 증가시켜서 headerText 바꿈
  const [agreement, setAgreement] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [signUpStep, setSignUpStep] = useState(0);
  const [isChecked, updateIsChecked] = useImmer(checked);
  // console.log(isChecked);
  return (
    <SignUpContext.Provider
      value={{
        headerText,
        setHeaderText,
        agreement,
        setAgreement,
        disabled,
        setDisabled,
        isChecked,
        updateIsChecked,
      }}
    >
      {props.children}
    </SignUpContext.Provider>
  );
}

let checked = [
  {
    text: "이용약관",
    checked: false,
  },
  {
    text: "개인정보 처리방침",
    checked: false,
  },
  { text: "마케팅 동의", checked: false },
];

/*
  회원가입 로그인 과정에서 사용할 context들
*/
