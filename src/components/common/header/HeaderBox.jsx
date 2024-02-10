import { useLocation } from "react-router-dom";
import { Context } from "../../context/context";
import styled from "styled-components";

export default function HeaderBox({ children }) {
  let location = useLocation();
  return (
    <Div location={location.pathname}>
      {location.pathname == "/SignUp" || location.pathname == "/CreateName" ? (
        <Img src={"img/tree.png"} alt="" />
      ) : (
        ""
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
  justify-content: center;
  position: relative;
  top: ${(props) =>
    props.location == "/SignUp" || props.location == "/CreateName"
      ? ""
      : "104px"};
`;

const TextBox = styled.div`
  width: ${(props) =>
    props.location == "SignUp" || props.location == "CreateName"
      ? "260px"
      : "100%"};
  height: 70px;
  font-size: 18px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: ${(props) =>
    props.location == "SignUp" || props.location == "CreateName"
      ? ""
      : "center"};

  .title {
    color: ${(props) => (props.location == "Login" ? "#5ac479" : "#f9f9f9")};
    font-size: 34px;
    font-weight: 700;
    line-height: 150%;
    font-family: "yg-jalnan";
  }
  sub {
    color: ${(props) => (props.location == "Login" ? "#5ac479" : "#f9f9f9")};
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
