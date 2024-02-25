import { useEffect } from "react";
import HeaderBox from "../components/common/header/HeaderBox";
import * as s from "../components/css/splash";
import { useLocation, useNavigate } from "react-router-dom";

export default function Splash() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  useEffect(() => {
    setTimeout(() => {
      navigate("/Login");
    }, 2000);
  });
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
