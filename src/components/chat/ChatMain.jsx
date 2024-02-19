import { useNavigate } from "react-router-dom";
import Navigation from "../common/Navigation";
import { firebaseAuth } from "../../service/firebaseConfig";
import styled from "styled-components";
export default function ChatMain() {
  const navigate = useNavigate();
  return (
    <Div>
      <Header>
        <span>{`안녕하세요 :) ${firebaseAuth.currentUser.displayName}님`}</span>
        <span>고민이 있으신가요?</span>
      </Header>
      <Main>
        <img src="img/tree.png" alt="" />
        <span>이때까지의 회고를 바탕으로</span>
        <span>더 좋은 선택을 도와드릴게요.</span>
      </Main>
      <Btn
        onClick={() => {
          navigate("/Chat");
        }}
      >
        물어보러 가기
      </Btn>
      <Navigation />
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 640px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const Header = styled.header`
  margin-top: 62px;
  width: 360px;
  height: 42px;
  font-size: 18px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const Main = styled.main`
  width: 360px;
  height: 358px;
  font-size: 18px;
  font-weight: 400;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  img {
    margin-bottom: 12px;
    width: 90px;
    height: 162px;
  }
`;

const Btn = styled.button`
  width: 312px;
  height: 56px;
  border: none;
  border-radius: 15px;
  color: #fff;
  font-size: 18px;
  background-color: #5ac479;
  outline: none;
`;
