import { SignUpContext } from "../context/context";
import { useContext } from "react";
import * as s from "../css/createName/createName";
export default function OverlapButton(props) {
  const { overlapCheck } = useContext(SignUpContext);

  return (
    <>
      <s.Btn
        state={overlapCheck}
        onClick={() => {
          fetchFunc(props.inputText);
        }}
        disabled={props.inputText.length >= 2 ? false : true}
      >
        {props.overLapText.btn[overlapCheck]}
      </s.Btn>
    </>
  );
}

async function fetchFunc(inputText) {
  try {
    const response = await fetch("link", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(inputText),
    });
  } catch (err) {
    console.log(err);
  }
}
