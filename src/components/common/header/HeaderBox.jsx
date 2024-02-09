import { useLocation } from "react-router-dom";
import { SignUpContext } from "../../context/SignUpContext";
import styled from "styled-components";

export default function HeaderBox({ children }) {
  let location = useLocation();
  return (
    <Div location={location.pathname.replace("/", "")}>
      {location.pathname.replace("/", "") == "SignUp" && (
        <Img src={"img/tree.png"} alt="" />
      )}
      <TextBox location={location.pathname.replace("/", "")}>
        {children}
      </TextBox>
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  top: ${(props) => (props.location == "Login" ? "104px" : "")};
`;

const TextBox = styled.div`
  width: ${(props) => (props.location == "Login" ? "100%" : "260px")};
  height: 70px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) => (props.location == "Login" ? "center" : "")};

  .title {
    color: #5ac479;
    font-size: 34px;
    font-weight: 700;
    line-height: 150%;
    font-family: "yg-jalnan";
  }
  sub {
    color: #5ac479;
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }
`;

const Img = styled.img`
  margin: 0 10px 0 24px;
  margin-right: 10px;
  width: 20px;
  height: 38px;
`;
