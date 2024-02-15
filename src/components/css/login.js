import styled from "styled-components";
import { FcGoogle } from "react-icons/fc";
export const Div = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-image: url("img/splash.png");
`;

export const Btn = styled.button`
  width: 300px;
  height: 54px;
  font-size: 16px;
  border: none;
  border-radius: 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  bottom: 30px;
  background-color: #fff;
`;

export const Title = styled.span`
  color: ${(props) => (props.location == "/Login" ? "#5ac479" : "#f9f9f9")};
  font-size: 34px;
  font-weight: 700;
  line-height: 150%;
  font-family: "yg-jalnan";
`;

export const GoogleIcon = styled(FcGoogle)`
  font-size: 20px;
  position: absolute;
  left: 16px;
`;
