import styled from "styled-components";
import { IoCheckmarkOutline } from "react-icons/io5";

export const Box = styled.div`
  width: 293px;
  height: 86px;
`;
export const Header = styled.div`
  width: 293px;
  height: 25px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;
`;

export const CheckIcon = styled(IoCheckmarkOutline)`
  font-size: 24px;
  color: ${(props) => (props.checked ? "#5AC479" : "#C6C6C6")};
`;

export const CheckBox = styled.input`
  appearance: none;
  background-image: url(${`${process.env.PUBLIC_URL}/img/check.png`});
  width: 24px;
  height: 24px;

  &:checked {
    width: 24px;
    height: 25px;
    background-image: url(${`${process.env.PUBLIC_URL}/img/checked.png`});
    position: relative;
    top: 1px;
  }
`;

export const Essential = styled.span`
  margin-left: 2px;
  color: #5ac479;
`;
export const TextBox = styled.div`
  width: 293px;
  height: 50px;
  border-radius: 5.707px;
  border: 1px solid #e3e3e3;
  font-size: 11px;
  line-height: 17px;
  overflow: auto;
`;
