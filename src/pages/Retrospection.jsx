import WriteProvider from "../components/provider/WriteProvider";
import MainHeader from "../components/common/header/MainHeader";
import WriteBox from "../components/retrospection/WriteBox";
import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";
import { FaLeaf } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";

export default function Retrospection() {
  return (
    <RetrospectionBox>
      <WriteProvider>
        <MainHeader>
          <div className="backBtn">
            <BsChevronLeft />
          </div>
          <div className="text">
            <FaLeaf className="leafIcon" />
            <span>
              {"2"}월{"8"}일의 회고
            </span>
            <IoTriangle className="calendarBtn" />
          </div>
        </MainHeader>
        <Input
          type="date"
          name=""
          id=""
          onClick={(e) => {
            // console.log(e.target.value.split("-"));
          }}
        />
        <Div>
          <WriteBox>
            <HiLocationMarker className="icon" />
            <span>현재까지 만족한 점: KEEP</span>
          </WriteBox>
          <WriteBox>
            <TiWarning className="icon" />
            <span>아쉬웠거나 개선이 필요하다고 느낀 점: Problem</span>
          </WriteBox>
          <WriteBox>
            <img src="img/sprout.png" alt="" className="icon" />
            <span>앞으로 개선할 점: Try</span>
          </WriteBox>
        </Div>
      </WriteProvider>
    </RetrospectionBox>
  );
}

const Input = styled.input`
  width: 200px;
  height: 50px;
  border: none;
  outline: none;
  position: absolute;
  top: 44px;
  left: 70px;
  background-color: transparent;

  &::-webkit-datetime-edit-month-field,
  &::-webkit-datetime-edit-day-field,
  &::-webkit-datetime-edit-year-field,
  &::-webkit-datetime-edit-text,
  &::-webkit-calendar-picker-indicator,
  &::-webkit-inner-spin-button {
    appearance: none;
    display: none;
  }

  &::-webkit-calendar-picker-indicator {
    display: block;
    padding-left: 200px;
  }
`;

const RetrospectionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Div = styled.div`
  width: 360px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* background-color: aqua; */
`;
