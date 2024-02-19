import { useContext, useEffect } from "react";
import * as s from "../css/createName/createName";
import { SignUpContext } from "../context/context";
import { setDisplayName } from "../../service/auth";
import { firebaseAuth } from "../../service/firebaseConfig";
export default function NameInput() {
  const { setOverlapCheck, setSignUpStep } = useContext(SignUpContext);
  useEffect(() => {
    setSignUpStep("CreateName");
  });
  let userName = firebaseAuth.currentUser.displayName;
  return (
    <s.Input
      type="text"
      maxLength={10}
      placeholder={userName ? userName : "닉네임을 입력해주세요"}
      onChange={(e) => {
        if (e.target.value.length >= 2) {
          setOverlapCheck(true);
          setDisplayName(e.target.value);
        }
      }}
    />
  );
}
