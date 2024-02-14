import styled from "styled-components";
import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import ReportProvider from "../components/provider/ReportProvider";
import Category from "../components/report/Category";
import ChartBox from "../components/report/Chart";
import CurrentStatus from "../components/report/CurrentStatus";

export default function Report() {
  return (
    <>
      <MainHeader>
        <span>분석 리포트</span>
      </MainHeader>
      <ReportProvider>
        <Div>
          <Category />
          <ChartBox />
          <CurrentStatus />
        </Div>
      </ReportProvider>
      <Navigation />
    </>
  );
}

const Div = styled.div`
  width: 100%;
  height: 463px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
