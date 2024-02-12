import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function HeaderBox({ children }) {
  let location = useLocation();
  return (
    <Div location={location.pathname}>
      <TextBox location={location.pathname}>{children}</TextBox>
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  top: ${(props) =>
    props.location == "/" || props.location == "/Login" ? "104px" : ""};
`;

const TextBox = styled.div`
  width: ${(props) =>
    props.location == "/SignUp" || props.location == "/CreateName"
      ? "260px"
      : "100%"};
  height: 70px;
  font-size: 18px;
  display: flex;
  flex-direction: ${(props) =>
    props.location == "/" || props.location == "/Login" ? "column" : ""};
  align-items: center;

  .text {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }

  .title {
    color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
    font-size: 34px;
    font-weight: 700;
    line-height: 150%;
    font-family: "yg-jalnan";
  }
  sub {
    color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }
`;
