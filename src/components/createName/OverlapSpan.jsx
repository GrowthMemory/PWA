import { useContext } from "react";
import { SignUpContext } from "../context/context";
import styled from "styled-components";

export default function OverlapSpan(props) {
  const { overlapCheck } = useContext(SignUpContext);
  return (
    <>
      <Span>{props.overLapText.span[overlapCheck]}</Span>
    </>
  );
}
const Span = styled.span`
  margin-left: 12px;
  font-size: 12px;
`;
