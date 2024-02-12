import styled from "styled-components";
import WriteProvider from "../components/provider/WriteProvider";
import MainHeader from "../components/common/header/MainHeader";
import WriteBox from "../components/retrospection/WriteBox";
import HeaderText from "../components/retrospection/HeaderText";
import InputCalendar from "../components/retrospection/InputCalendar";
import { HiLocationMarker } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";

export default function Retrospection() {
  return (
    <RetrospectionBox>
      <WriteProvider>
        <MainHeader>
          <HeaderText />
        </MainHeader>
        <InputCalendar />
        <Div>
          <WriteBox id={"keep"}>
            <HiLocationMarker className="icon" />
            <span>현재까지 만족한 점: KEEP</span>
          </WriteBox>
          <WriteBox id={"problem"}>
            <TiWarning className="icon" />
            <span>아쉬웠거나 개선이 필요하다고 느낀 점: Problem</span>
          </WriteBox>
          <WriteBox id={"try"}>
            <img src="img/sprout.png" alt="" className="icon" />
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
