import styled from "styled-components";
import HeaderBox from "../components/common/header/HeaderBox";
import { useLocation } from "react-router-dom";

export default function Splash() {
  const location = useLocation().pathname;
  return (
    <>
      <Div>
        <HeaderBox>
          <Title location={location}>Growth Memory</Title>
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

const Title = styled.span`
  color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
  font-size: 34px;
  font-weight: 700;
  line-height: 150%;
  font-family: "yg-jalnan";
`;
