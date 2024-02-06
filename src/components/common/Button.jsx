import { useContext } from "react";
import { IoCheckmarkOutline } from "react-icons/io5";
import { SignUpContext } from "../SignUpContext";
import styled from "styled-components";

export default function Button(props) {
  const { agreement, setAgreement, updateIsChecked } =
    useContext(SignUpContext);
  const btnText = ["네, 모두 동의 합니다.", "다음"];

  return (
    <>
      <Btn
        num={props.num}
        agreement={agreement}
        onClick={(e) => {
          if (agreement != 3) {
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
        }}
      >
        {!props.num && <IoCheckmarkOutline className="icon" />}
        {btnText[props.num]}
      </Btn>
    </>
  );
}

const Btn = styled.button`
  margin-bottom: ${(props) => (props.num == 0 ? "19px" : "0px")};
  width: 280px;
  height: ${(props) => (props.num == 0 ? "46px" : "54px")};

  border: none;
  border-radius: 10px;

  font-size: 16px;
  color: ${(props) => (props.agreement != 3 ? "#aeaeb2" : "#FFF")};

  position: relative;
  top: ${(props) => (props.num == 0 ? "0px" : "17px")};

  display: flex;
  justify-content: center;
  align-items: center;

  background-color: ${(props) => {
    if (props.num == 0) {
      if (props.agreement != 3) {
        return "#E3E3E3";
      } else {
        return "#5AC479";
      }
    } else {
      if (props.agreement == 3) {
        return "#5AC479";
      }
    }
  }};

  .icon {
    font-size: 24px;
    position: absolute;
    left: 16px;
  }
`;
