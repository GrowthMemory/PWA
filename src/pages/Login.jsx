import { useLocation, useNavigate } from "react-router-dom";
import HeaderBox from "../components/common/header/HeaderBox";
import { signInWithGoogle } from "../service/auth";
import * as s from "../components/css/login";

export default function Login() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <s.Div>
      <HeaderBox>
        <s.Title location={location}>Growth Memory</s.Title>
        <sub>오늘도 성장하는 나를 위해</sub>
      </HeaderBox>
      <s.Btn
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <s.GoogleIcon />
        구글 로그인/회원가입
      </s.Btn>
    </s.Div>
  );
}
