import HeaderBox from "../components/common/header/HeaderBox";
import * as s from "../components/css/splash";
import { useLocation } from "react-router-dom";

export default function Splash() {
  const location = useLocation().pathname;
  return (
    <>
      <s.Div>
        <HeaderBox>
          <s.Title location={location}>Growth Memory</s.Title>
          <sub>오늘도 성장하는 나를 위해</sub>
        </HeaderBox>
      </s.Div>
    </>
  );
}
