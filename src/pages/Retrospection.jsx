import styled from "styled-components";
import WriteProvider from "../components/provider/WriteProvider";
import CalendarProvider from "../components/provider/CalendarProvider";
import MainHeader from "../components/common/header/MainHeader";
import WriteBox from "../components/retrospection/WriteBox";
import HeaderText from "../components/retrospection/HeaderText";
import InputCalendar from "../components/common/InutCalendar";
import { HiLocationMarker } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";
import ReportProvider from "../components/provider/ReportProvider";
import ReportCalendar from "../components/common/InputCalendar";
import { useState } from "react";

export default function Retrospection() {
  const [showCalendar, setShowCalendar] = useState(false);
  return (
    <RetrospectionBox>
      <WriteProvider>
        <MainHeader>
          <HeaderText setShowCalendar={setShowCalendar} />
        </MainHeader>
        <ReportProvider>
          {showCalendar && <ReportCalendar setShowCalendar={setShowCalendar} />}
        </ReportProvider>
        <Div>
          <WriteBox id={"keep"}>
            <KeepIcon />
            <span>현재까지 만족한 점: KEEP</span>
          </WriteBox>
          <WriteBox id={"problem"}>
            <ProblemIcon />
            <span>아쉬웠거나 개선이 필요하다고 느낀 점: Problem</span>
          </WriteBox>
          <WriteBox id={"try"}>
            <TryIcon src="img/sprout.png" alt="" />
            <span>앞으로 개선할 점: Try</span>
          </WriteBox>
        </Div>
      </WriteProvider>
    </RetrospectionBox>
  );
}

const RetrospectionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  width: 360px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const KeepIcon = styled(HiLocationMarker)`
  font-size: 24px;
  color: #5ac479;
`;

const ProblemIcon = styled(TiWarning)`
  font-size: 24px;
  color: #5ac479;
`;
const TryIcon = styled.img`
  width: 24px;
  height: 24px;
  color: #5ac479;
`;
