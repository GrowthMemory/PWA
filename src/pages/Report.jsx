import Navigation from "../components/common/Navigation";
import MainHeader from "../components/common/header/MainHeader";
import ReportProvider from "../components/provider/ReportProvider";
import Category from "../components/report/Category";
import ChartBox from "../components/report/Chart";
import CurrentStatus from "../components/report/CurrentStatus";
import * as s from "../components/css/report/report";

export default function Report() {
  return (
    <s.ReportBox>
      <MainHeader>
        <span>분석 리포트</span>
      </MainHeader>
      <ReportProvider>
        <s.Div>
          <Category />
          <ChartBox />
          <CurrentStatus />
        </s.Div>
      </ReportProvider>
      <Navigation />
    </s.ReportBox>
  );
}
