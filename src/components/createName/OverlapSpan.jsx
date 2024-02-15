import { useContext } from "react";
import { SignUpContext } from "../context/context";
import * as s from "../css/createName/createName";
export default function OverlapSpan(props) {
  const { overlapCheck } = useContext(SignUpContext);
  return (
    <>
      <s.Span>{props.overLapText.span[overlapCheck]}</s.Span>
    </>
  );
}
