import styled from "styled-components";

export const Div = styled.div`
  width: 360px;
  height: 70px;
  display: flex;
  align-items: center;
  position: relative;
  top: ${(props) =>
    props.location == "/" || props.location == "/Login" ? "104px" : ""};
`;

export const TextBox = styled.div`
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

  sub {
    color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
    font-size: 16px;
    font-weight: 400;
    line-height: 150%;
  }
`;
