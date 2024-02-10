import styled from "styled-components";
import HeaderBox from "../components/common/header/HeaderBox";

export default function Splash() {
  return (
    <>
      <Div>
        <HeaderBox>
          <span className="title">Growth Memory</span>
          <sub>오늘도 성장하는 나를 위해</sub>
        </HeaderBox>
      </Div>
    </>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #5ac479;
  background-image: url("img/splash.png");
`;
