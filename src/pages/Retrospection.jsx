import WriteProvider from "../components/provider/WriteProvider";
import MainHeader from "../components/common/header/MainHeader";
import WriteBox from "../components/retrospection/WriteBox";
import HeaderText from "../components/retrospection/HeaderText";
import ReportProvider from "../components/provider/ReportProvider";
import ReportCalendar from "../components/common/InputCalendar";
import NoticeModal from "../components/retrospection/NoticeModal";
import * as s from "../components/css/retrospection/retrospection";
import { useState } from "react";

export default function Retrospection() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [showModal, setShowModal] = useState(false);
  return (
    <s.RetrospectionBox>
      <WriteProvider>
        <ReportProvider>
          <MainHeader>
            <HeaderText
              setShowCalendar={setShowCalendar}
              setShowModal={setShowModal}
            />
          </MainHeader>
          {showCalendar && <ReportCalendar setShowCalendar={setShowCalendar} />}
          {showModal && <NoticeModal setShowModal={setShowModal} />}
        </ReportProvider>
        <s.Div>
          <WriteBox id={"keep"}>
            <s.KeepIcon />
            <span>현재까지 만족한 점: KEEP</span>
          </WriteBox>
          <WriteBox id={"problem"}>
            <s.ProblemIcon />
            <span>아쉬웠거나 개선이 필요하다고 느낀 점: Problem</span>
          </WriteBox>
          <WriteBox id={"try"}>
            <s.TryIcon src="img/sprout.png" alt="" />
            <span>앞으로 개선할 점: Try</span>
          </WriteBox>
        </s.Div>
      </WriteProvider>
    </s.RetrospectionBox>
  );
}
