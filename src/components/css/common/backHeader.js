import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { BsChevronLeft } from "react-icons/bs";

export const Div = styled.div`
  width: 360px;
  height: 56px;
  position: relative;
`;

export const CloseIcon = styled(RxCross1)`
  font-size: 26px;
  position: absolute;
  top: 10px;
  right: 24px;
`;

export const BackIcon = styled(BsChevronLeft)`
  font-size: 26px;
  position: absolute;
  top: 10px;
  left: 24px;
`;
