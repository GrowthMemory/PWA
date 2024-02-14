import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import HomeProvider from "../components/provider/HomeProvider";
import HomeHeader from "../components/home/HomeHeader";
import SteadyCalendar from "../components/home/SteadyCalendar";
import Performance from "../components/home/Performance";
import Navigation from "../components/common/Navigation";
import { LuPencilLine } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { BsPinAngleFill } from "react-icons/bs";
import { IoRibbonSharp } from "react-icons/io5";
import { useEffect } from "react";
import { SELECTDATE } from "../components/common/key";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem(SELECTDATE);
  });
  return (
    <HomeBox>
      <HomeProvider>
        <HomeHeader />
        <Div>
          <Btn
            onClick={() => {
              navigate("/Write");
            }}
          >
            <LeftIcon />
            오늘의 회고를 작성해주세요
            <RightIcon />
          </Btn>
          <CalendarDiv>
            <Title>
              <span>
                <PinIcon /> 얼마나 꾸준히 했는지 살펴보세요
              </span>
            </Title>
            <SteadyCalendar />
          </CalendarDiv>
          <PerformanceDiv>
            <Title>
              <span>
                <MedalIcon />
                성과를 확인해보세요
              </span>
            </Title>
            <Performance />
          </PerformanceDiv>
        </Div>
        <Navigation />
      </HomeProvider>
    </HomeBox>
  );
}

const HomeBox = styled.section`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const Div = styled.div`
  width: 100%;
  height: 421px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Btn = styled.button`
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
`;
const LeftIcon = styled(LuPencilLine)`
  margin: 0 14px 0 17px;
`;

const RightIcon = styled(FaAngleRight)`
  position: absolute;
  right: 12px;
`;

const CalendarDiv = styled.div`
  margin-bottom: 26px;
  width: 312px;
  height: 200px;
`;

const Title = styled.div`
  width: 100%;
  height: 30px;
  font-size: 16px;
  font-weight: 600;
`;

const PinIcon = styled(BsPinAngleFill)`
  margin-right: 2px;
  color: red;
  font-size: 18px;
  position: relative;
  top: 4px;
`;

const PerformanceDiv = styled.div`
  width: 312px;
  height: 110px;
`;

const MedalIcon = styled(IoRibbonSharp)`
  margin-right: 2px;
  color: #ecef5a;
  font-size: 18px;
  position: relative;
  top: 4px;
`;
