import { signInWithGoogle } from "../service/auth";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
  return (
    <>
      <button
        onClick={() => {
          signInWithGoogle();
        }}
      >
        <FcGoogle />
        구글 로그인/회원가입
      </button>
    </>
  );
}
