import { useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { SignUpContext } from "../../context/SignUpContext";
export default function BackHeader(props) {
  const { headerText, signUpStep } = useContext(SignUpContext);
  useEffect(() => {
    props.setCurrentPage(signUpStep);
  }, [signUpStep]);
  return (
    <Div>
      {headerText == "CollectPersonalData" && <RxCross1 className="close" />}
    </Div>
  ); // 0인거 나중에 1로 바꿔야 함 아직 구글로그인 페이지 안 만들어서 0인거임
}

const Div = styled.div`
  margin-top: 44px;
  width: 360px;
  height: 56px;
  position: relative;

  .close {
    font-size: 26px;
    position: absolute;
    right: 24px;
  }
`;
