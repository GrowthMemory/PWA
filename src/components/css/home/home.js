import { LuPencilLine } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { BsPinAngleFill } from "react-icons/bs";
import { IoRibbonSharp } from "react-icons/io5";
import styled from "styled-components";
export const HomeBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
export const Main = styled.div`
  width: 100%;
  height: 421px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Btn = styled.button`
  margin-bottom: 27px;
  width: 311px;
  height: 45px;
  border: none;
  border-radius: 5px;
  color: #f9f9f9;
  font-size: 14px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  display: flex;
  align-items: center;
  position: relative;
  background-color: #5ac479;

  div {
    width: 70%;
    height: 100%;
    background-color: #f9f9f9;
  }
`;
export const LeftIcon = styled(LuPencilLine)`
  margin: 0 14px 0 17px;
`;

export const RightIcon = styled(FaAngleRight)`
  position: absolute;
  right: 12px;
`;

export const CalendarDiv = styled.div`
  margin-bottom: 26px;
  width: 312px;
  height: 200px;
`;

export const Title = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
`;

export const PinIcon = styled(BsPinAngleFill)`
  margin-right: 2px;
  color: red;
  font-size: 18px;
  position: relative;
  top: 4px;
`;

export const PerformanceDiv = styled.div`
  width: 312px;
  height: 110px;
`;

export const MedalIcon = styled(IoRibbonSharp)`
  margin-right: 2px;
  color: #ecef5a;
  font-size: 18px;
  position: relative;
  top: 4px;
`;

export const Div = styled.div`
  width: 312px;
  height: 75px;
  border-radius: 5px;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.25);
  background: #fff;
`;
