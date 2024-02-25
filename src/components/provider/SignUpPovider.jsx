import { useState } from "react";
import { useImmer } from "use-immer";
import { SignUpContext } from "../context/context";

export default function SignUpProvider(props) {
  const [agreement, setAgreement] = useState(0);
  const [disabled, setDisabled] = useState(true);
  const [signUpStep, setSignUpStep] = useState("CollectPersonalData");
  const [overlapCheck, setOverlapCheck] = useState("none");
  const [isChecked, updateIsChecked] = useImmer(checked);
  return (
    <SignUpContext.Provider
      value={{
        agreement,
        setAgreement,
        disabled,
        setDisabled,
        isChecked,
        updateIsChecked,
        signUpStep,
        setSignUpStep,
        overlapCheck,
        setOverlapCheck,
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
