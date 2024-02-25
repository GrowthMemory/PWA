import styled from "styled-components";
export const Div = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  background-color: #5ac479;
  background-image: url("img/splash.png");
`;

export const Title = styled.span`
  color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
  font-size: 34px;
  font-weight: 700;
  line-height: 150%;
  font-family: "yg-jalnan";
`;
