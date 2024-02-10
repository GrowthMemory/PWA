import HomeHeader from "../components/home/HomeHeader";
import SteadyCalendar from "../components/home/SteadyCalendar";
import Performance from "../components/home/Performance";
import { LuPencilLine } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import styled from "styled-components";
import HomeProvider from "../components/provider/HomeProvider";
export default function Home() {
  return (
    <HomeProvider>
      <HomeHeader />
      <Section>
        <Btn>
          <LuPencilLine className="leftIcon" />
          오늘의 회고를 작성해주세요
          <FaAngleRight className="rigntIcon" />
        </Btn>
        <div>
          <span>얼마나 꾸준히 했는지 살펴보세요</span>
          <SteadyCalendar />
        </div>
        <div>
          <span>성과를 확인해보세요</span>
          <Performance />
        </div>
      </Section>
    </HomeProvider>
  );
}

const Section = styled.section`
  width: 100%;
  height: 477px;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: beige;
`;

const Btn = styled.button`
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

  .leftIcon {
    margin: 0 14px 0 17px;
  }
  .rigntIcon {
    position: absolute;
    right: 12px;
  }
`;
