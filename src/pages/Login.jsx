import HeaderBox from "../components/common/header/HeaderBox";
import { signInWithGoogle } from "../service/auth";
import { FcGoogle } from "react-icons/fc";
import styled from "styled-components";

export default function Login() {
  return (
    <Div>
      <HeaderBox>
        <span className="title">Growth Memory</span>
        <sub>오늘도 성장하는 나를 위해</sub>
      </HeaderBox>
      <Btn
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <FcGoogle className="googleLogo" />
        구글 로그인/회원가입
      </Btn>
    </Div>
  );
}

const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("img/splash.png");
`;

const Btn = styled.button`
  width: 300px;
  height: 54px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 30px;
  background-color: #fff;

  .googleLogo {
    font-size: 20px;
    position: absolute;
    left: 16px;
  }
`;
