import { FaLeaf } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { WriteContext } from "../context/context";
import styled from "styled-components";
export default function HeaderText() {
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  return (
    <>
      <BackBtn>
        <BsChevronLeft />
      </BackBtn>
      <TextBox>
        <LeafIcon />
        <span>
          {retrospectionData.date.month}월{retrospectionData.date.date}일의 회고
        </span>
        <CalendarBtn />
      </TextBox>
    </>
  );
}

const BackBtn = styled.div`
  width: 45px;
  height: 45px;
  font-size: 18px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  left: 24px;
`;

const TextBox = styled.div`
  width: 160px;
  height: 100%;
  font-size: 16px;
  font-weight: 600;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LeafIcon = styled(FaLeaf)`
  margin-right: 4px;
  font-size: 22px;
  color: #5ac479;
`;

const CalendarBtn = styled(IoTriangle)`
  margin-left: 3px;
  font-size: 15px;
  transform: rotate(180deg);
`;
