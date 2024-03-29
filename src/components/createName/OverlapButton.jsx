import { SignUpContext } from "../context/context";
import { useContext, useEffect } from "react";
import * as s from "../css/createName/createName";
export default function OverlapButton(props) {
  const { overlapCheck, setOverlapCheck, setSignUpStep } =
    useContext(SignUpContext);
  useEffect(() => {
    setSignUpStep("CreateName");
  });
  return (
    <>
      <s.Btn
        state={overlapCheck}
        onClick={() => {
          setOverlapCheck(() => {
            let temp = fetchFunc(props.inputText);
            return temp;
          });
        }}
        disabled={props.inputText.length >= 2 ? false : true}
      >
        {props.overLapText.btn[overlapCheck]}
      </s.Btn>
    </>
  );
}
