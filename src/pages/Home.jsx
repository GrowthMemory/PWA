import { useNavigate } from "react-router-dom";
import HomeProvider from "../components/provider/HomeProvider";
import HomeHeader from "../components/home/HomeHeader";
import SteadyCalendar from "../components/home/SteadyCalendar";
import Performance from "../components/home/Performance";
import Navigation from "../components/common/Navigation";
import { useEffect } from "react";
import { SELECTDATE } from "../components/common/key";
import * as s from "../components/css/home/home";
export default function Home() {
  const navigate = useNavigate();
  useEffect(() => {
    localStorage.removeItem(SELECTDATE);
  });
  return (
    <s.HomeBox>
      <HomeProvider>
        <HomeHeader />
        <s.Main>
          <s.Btn
            onClick={() => {
              navigate("/Write");
            }}
          >
            <s.LeftIcon />
            오늘의 회고를 작성해주세요
            <s.RightIcon />
          </s.Btn>
          <s.CalendarDiv>
            <s.Title>
              <span>
                <s.PinIcon /> 얼마나 꾸준히 했는지 살펴보세요
              </span>
            </s.Title>
            <SteadyCalendar />
          </s.CalendarDiv>
          <s.PerformanceDiv>
            <s.Title>
              <span>
                <s.MedalIcon />
                성과를 확인해보세요
              </span>
            </s.Title>
            <Performance />
          </s.PerformanceDiv>
        </s.Main>
        <Navigation />
      </HomeProvider>
    </s.HomeBox>
  );
}
