import { useContext } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import styled from "styled-components";
import { SignUpContext } from "../context/context";
import { useNavigate } from "react-router-dom";
export default function Button(props) {
  const {
    agreement,
    setAgreement,
    updateIsChecked,
    setSignUpStep,
    signUpStep,
    overlapCheck,
  } = useContext(SignUpContext);

  const navigate = useNavigate();

  return (
    <>
      <Btn
        text={props.text}
        agreement={agreement}
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
            navigate("/CreateName");
          }
        }}
        disabled={
          props.text == "next"
            ? signUpStep == "CollectPersonalData"
              ? agreement == 3
                ? false
                : true
              : overlapCheck == "true"
              ? false
              : true
            : ""
        }
      >
        {!props.text && <IoCheckmarkOutline className="icon" />}
        {btnText[props.text]}
      </Btn>
    </>
  );
}
const btnText = {
  agree: "네, 모두 동의 합니다.",
  next: "다음",
};

const Btn = styled.button`
  width: 280px;
  height: ${(props) => (props.text == "agree" ? "46px" : "54px")};

  border: none;
  border-radius: 10px;

  font-size: 16px;
  color: ${(props) => (props.agreement != 3 ? "#aeaeb2" : "#FFF")};

  position: relative;

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => {
    if (props.agreement == 3) {
      return "#5AC479";
    } else {
      return "#e3e3e3";
    }
  }};
  &:disabled {
    background-color: #e3e3e3;
  }

  .icon {
    font-size: 24px;
    position: absolute;
    left: 16px;
  }
`;
