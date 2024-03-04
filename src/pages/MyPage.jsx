import Header from "../components/myPage/Header";
import { GrAnnounce } from "react-icons/gr";
import { LiaHeadsetSolid } from "react-icons/lia";
import { BsLayoutTextWindow } from "react-icons/bs";
import { BsPersonExclamation } from "react-icons/bs";
import { GrPowerCycle } from "react-icons/gr";
import PageBlock from "../components/myPage/PageBlock";
import styled from "styled-components";
import Navigation from "../components/common/Navigation";
import MyPageProvider from "../components/provider/MyPageProvider";
export default function MyPage() {
  return (
    <>
      <MyPageProvider>
        <Header />
        <Div>
          <PageBlock>
            <GrAnnounce />
            <Span>공지사항</Span>
          </PageBlock>
          <PageBlock>
            <LiaHeadsetSolid />
            <Span>문의 하기</Span>
          </PageBlock>
          <PageBlock>
            <BsLayoutTextWindow />
            <Span>서비스 이용 약관</Span>
          </PageBlock>
          <PageBlock>
            <BsPersonExclamation />
            <Span>개인정보 수집 및 이용</Span>
          </PageBlock>
          <PageBlock readOnly={true}>
            <GrPowerCycle />
            <Span>버전 정보</Span>
            <CurrentVersion>0.0.1</CurrentVersion>
            <VerSionText>최신 버전입니다.</VerSionText>
          </PageBlock>
        </Div>
        <Navigation />
      </MyPageProvider>
    </>
  );
}

const Div = styled.div`
  width: 360px;
  height: 496px;
`;

const Span = styled.span`
  margin-left: 13px;
  color: #212121;
  font-size: 14px;
  font-weight: 400;
`;

const CurrentVersion = styled.span`
  margin-left: 14px;
  color: #636366;
  font-size: 16px;
`;

const VerSionText = styled.span`
  color: #98989d;
  font-size: 14px;
  font-weight: 500;
  position: absolute;
  right: 13px;
`;
