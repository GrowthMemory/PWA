import styled from "styled-components";
import { SignUpContext } from "../context/SignUpContext";
import { useContext } from "react";

export default function OverlapButton(props) {
  const { overlapCheck } = useContext(SignUpContext);

  return (
    <>
      <Btn
        state={overlapCheck}
        onClick={() => {
          fetchFunc(props.inputText);
        }}
        disabled={props.inputText.length >= 2 ? false : true}
      >
        {props.overLapText.btn[overlapCheck]}
      </Btn>
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

const Btn = styled.button`
  margin-right: 7px;
  width: 50px;
  height: 24px;
  border-radius: 7px;
  border: none;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => {
    if (props.state == "none") return "#8E8E93";
    else if (props.state == "false") return "#DC2424";
    else return "#5AC479";
  }};
`;
