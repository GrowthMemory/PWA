import { useContext, useEffect } from "react";
import styled from "styled-components";
import { MyPageContext } from "../context/context";
import { useNavigate } from "react-router-dom";
import { firebaseAuth } from "../../service/firebaseConfig";

export default function Header() {
  const { userName, setUserName } = useContext(MyPageContext);
  const navigate = useNavigate();

  useEffect(() => {
    if (firebaseAuth.currentUser) {
      setUserName(firebaseAuth.currentUser.displayName);
    }
  });
  return (
    <HeaderBox>
      <Div>
        <ImgBox>
          <Img src="img/tree.png" alt="" />
        </ImgBox>
        <Name>{userName}</Name>
      </Div>
      <NameChangeBtn
        onClick={() => {
          navigate("/CreateName");
        }}
      >
        닉네임 수정
      </NameChangeBtn>
    </HeaderBox>
  );
}

const HeaderBox = styled.div`
  width: 360px;
  height: 80px;
  border-bottom: 6px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;
const Div = styled.div`
  width: 219px;
  height: 100%;
  display: flex;
  align-items: center;
`;
const ImgBox = styled.div`
  margin: 0 6px 0 16px;
  width: 30px;
  height: 48px;
  border-radius: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f5f5f5;
`;
const Img = styled.img`
  width: 14px;
  height: 25px;
`;

const Name = styled.span`
  color: #212121;
  font-size: 18px;
  font-weight: 700;
  line-height: 150%;
  letter-spacing: -0.36px;
`;

const NameChangeBtn = styled.button`
  margin-right: 16px;
  width: 55px;
  height: 20px;
  border: none;
  color: #9e9e9e;
  font-size: 11px;
  font-weight: 500;
  background-color: transparent;
`;
