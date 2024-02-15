import { IoCheckmarkOutline } from "react-icons/io5";
import styled from "styled-components";

export const Btn = styled.button`
  width: 280px;
  height: ${(props) => (props.text == "agree" ? "46px" : "54px")};
  border: none;
  border-radius: 10px;
  font-size: 16px;
  color: ${(props) => (props.agreement != 3 ? "#aeaeb2" : "#FFF")};
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => {
    if (props.agreement == 3) {
      return "#5AC479";
    } else {
      return "#e3e3e3";
    }
  }};
  &:disabled {
    background-color: #e3e3e3;
  }
`;

export const CheckIcon = styled(IoCheckmarkOutline)`
  font-size: 24px;
  position: absolute;
  left: 16px;
`;
