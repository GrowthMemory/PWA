import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";

export const Div = styled.div`
  width: 360px;
  height: 526px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InformationText = styled.p`
  width: 307px;
  height: 440px;
  overflow-y: auto;
`;

export const Button = styled.button`
  margin-bottom: 9px;
  width: 312px;
  height: 56px;
  border: none;
  border-radius: 15px;
  color: #fff;
  background-color: #5ac479;
  outline: none;
`;

export const BackBtn = styled(BsChevronLeft)`
  font-size: 20px;
  position: absolute;
  left: 24px;
`;
