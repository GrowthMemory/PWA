import { useContext } from "react";
import { MyPageContext, SignUpContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import * as s from "../css/common/button";
export default function Button(props) {
  const { agreement, setAgreement, updateIsChecked, signUpStep, overlapCheck } =
    useContext(SignUpContext);
  const { userName, setUserName } = useContext(MyPageContext);

  const navigate = useNavigate();
  return (
    <>
      <s.Btn
        text={props.text}
        agreement={agreement}
        overlapCheck={overlapCheck}
        onClick={(e) => {
          if (props.text == "agree" && agreement != 3) {
            setAgreement(3);
            updateIsChecked((update) => {
              update[0].checked = true;
              update[1].checked = true;
              update[2].checked = true;
            });
          } else {
            setAgreement(0);
            updateIsChecked((update) => {
              update[0].checked = false;
              update[1].checked = false;
              update[2].checked = false;
            });
          }
          if (props.text == "next" && agreement == 3) {
            navigate("/Login");
          }
          if (signUpStep == "CreateName") {
            navigate("/Home");
          }
          if (userName != null) {
            navigate("/MyPage");
          }
        }}
        disabled={
          props.text == "next"
            ? signUpStep == "CollectPersonalData"
              ? agreement == 3
                ? false
                : true
              : overlapCheck == true
              ? false
              : true
            : ""
        }
      >
        {props.text == "agree" && <s.CheckIcon />}
        {btnText[props.text]}
      </s.Btn>
    </>
  );
}

const btnText = {
  agree: "네, 모두 동의 합니다.",
  next: "다음",
};
