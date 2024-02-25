import { useContext } from "react";
import { SignUpContext } from "../context/context";
import * as s from "../css/common/terms";
export default function Terms(props) {
  const { setAgreement, updateIsChecked, isChecked } =
    useContext(SignUpContext);
  return (
    <s.Box>
      <s.Header checked={isChecked[props.num].checked}>
        <s.CheckIcon
          checked={isChecked[props.num].checked}
          onClick={(e) => {
            updateIsChecked((update) => {
              update[props.num].checked = !update[props.num].checked;
            });
            if (!isChecked[props.num].checked) {
              setAgreement((prev) => (prev += 1));
            } else {
              setAgreement((prev) => (prev -= 1));
            }
          }}
        />
        <span>{props.text}</span>
        <s.Essential>{"(필수)"}</s.Essential>
      </s.Header>
      <s.TextBox>
        <p>
          약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다
        </p>
      </s.TextBox>
    </s.Box>
  );
}
