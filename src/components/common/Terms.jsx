import { useContext } from "react";
import { SignUpContext } from "../context/context";
import * as s from "../css/common/terms";
import { useLocation, useNavigate } from "react-router-dom";
import { FROMPAGE, INFORMATIONTITLE } from "./key";
export default function Terms(props) {
  const { setAgreement, updateIsChecked, isChecked } =
    useContext(SignUpContext);
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <s.Box
      onClick={(e) => {
        localStorage.setItem(INFORMATIONTITLE, props.text);
        localStorage.setItem(FROMPAGE, location);
        navigate("/InforMation");
      }}
    >
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
      <s.TextBox>{props.children}</s.TextBox>
    </s.Box>
  );
}
