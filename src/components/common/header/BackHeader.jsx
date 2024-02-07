import { useContext, useEffect } from "react";
import { RxCross1 } from "react-icons/rx";
import styled from "styled-components";
import { SignUpContext } from "../../context/SignUpContext";
import { BsChevronLeft } from "react-icons/bs";
export default function BackHeader(props) {
  const { signUpStep, setSignUpStep } = useContext(SignUpContext);
  useEffect(() => {
    props.setCurrentPage(signUpStep);
  }, [signUpStep]);

  function goBack() {
    if (signUpStep == "CreateName") {
      setSignUpStep("CollectPersonalData");
    }
  }

  return (
    <Div>
      <div>
        {signUpStep == "CollectPersonalData" && <RxCross1 className="close" />}
        {signUpStep == "CreateName" && (
          <BsChevronLeft className="back" onClick={goBack} />
        )}
      </div>
    </Div>
  );
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
  .back {
    font-size: 26px;
    position: absolute;
    left: 24px;
  }
`;
