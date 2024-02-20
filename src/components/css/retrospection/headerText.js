import styled from "styled-components";
import { FaLeaf } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
export const BackBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 24px;
  z-index: 2;
`;

export const TextBox = styled.div`
  width: 320px;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const LeafIcon = styled(FaLeaf)`
  margin-right: 4px;
  font-size: 22px;
  color: #5ac479;
`;

export const CalendarBtn = styled(IoTriangle)`
  margin-left: 3px;
  font-size: 15px;
  transform: rotate(180deg);
`;

export const CheckBtn = styled(FaCheck)`
  font-size: 20px;
  color: #5ac479;
  position: absolute;
  right: 0;
`;
