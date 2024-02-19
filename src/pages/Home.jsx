import { useNavigate } from "react-router-dom";
import HomeProvider from "../components/provider/HomeProvider";
import HomeHeader from "../components/home/HomeHeader";
import SteadyCalendar from "../components/home/SteadyCalendar";
import Performance from "../components/home/Performance";
import Navigation from "../components/common/Navigation";
import { useEffect, useState } from "react";
import { SELECTDATE } from "../components/common/key";
import * as s from "../components/css/home/home";
import { getUserAllReviews } from "../service/db";
import { getUID } from "../service/auth";

export default function Home() {
  const navigate = useNavigate();
  const [todayRetrospection, setTodayRetrospection] = useState(false);
  const nowDate = new Date();
  const year = nowDate.getFullYear() - 2000;
  const month = nowDate.getMonth() + 1;
  const date = nowDate.getDate();
  let currentDate = `${year}-${month < 10 ? "0" + month : month}-${
    date < 10 ? "0" + date : date
  }`;
  useEffect(() => {
    setTodayRetrospection(false);
    localStorage.removeItem(SELECTDATE);
    let uid = getUID();
    let func = async () => {
      let temp = await getUserAllReviews(uid);
      let key = Object.keys(temp);
      for (let i = 0; i < key.length; i++) {
        if (currentDate == key[i]) {
          setTodayRetrospection(true);
          break;
        }
      }
    };
    func();
  }, []);

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
            {/*여기 아이콘*/}
            {todayRetrospection
              ? "오늘의 회고를 작성했어요 :)"
              : "오늘의 회고를 작성해주세요"}

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
