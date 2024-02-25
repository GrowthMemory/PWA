import { useContext } from "react";
import { ReportContext } from "../context/context";
import * as s from "../css/report/currentStatus";

export default function CurrentStatus() {
  const { currentStatusObj, setCurrentStatusObj } = useContext(ReportContext);
  return (
    <s.Div>
      <s.Title>현재 나의 상태는 이래요!</s.Title>
      <s.Status>
        <s.Input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          value={currentStatusObj.score}
          readOnly
        />
        <p>
          {`평균 ${currentStatusObj.score}점 입니다. ${currentStatusObj.text} 상태에요`}
        </p>
      </s.Status>
    </s.Div>
  );
}
