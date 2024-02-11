import styled from "styled-components";
import HomeProvider from "../components/provider/HomeProvider";
import HomeHeader from "../components/home/HomeHeader";
import SteadyCalendar from "../components/home/SteadyCalendar";
import Performance from "../components/home/Performance";
import { LuPencilLine } from "react-icons/lu";
import { FaAngleRight } from "react-icons/fa6";
import { BsPinAngleFill } from "react-icons/bs";
import { BiSolidMedal } from "react-icons/bi"; //예비1
import { IoRibbonSharp } from "react-icons/io5"; //예비2
import { SlBadge } from "react-icons/sl";
import Navigation from "../components/common/Navigation";
import { onSignOut } from "../service/auth";
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
                <CalendarDiv>
                    <div className="title">
                        <span>
                            <BsPinAngleFill className="pinIcon" /> 얼마나 꾸준히
                            했는지 살펴보세요
                        </span>
                    </div>
                    <SteadyCalendar />
                </CalendarDiv>
                <PerformanceDiv>
                    <div className="title">
                        <span>
                            <IoRibbonSharp className="medalIcon" />
                            성과를 확인해보세요
                        </span>
                    </div>
                    <Performance />
                </PerformanceDiv>
            </Section>
            <Navigation />
        </HomeProvider>
    );
}

const Section = styled.section`
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

    .leftIcon {
        margin: 0 14px 0 17px;
    }
    .rigntIcon {
        position: absolute;
        right: 12px;
    }
`;

const CalendarDiv = styled.div`
    margin-bottom: 26px;
    width: 312px;
    height: 200px;

    .title {
        width: 100%;
        height: 30px;
        font-size: 16px;
        font-weight: 600;
    }
    .pinIcon {
        margin-right: 2px;
        color: red;
        font-size: 18px;
        position: relative;
        top: 4px;
    }
`;

const PerformanceDiv = styled.div`
    width: 312px;
    height: 110px;

    .title {
        width: 100%;
        height: 30px;
        font-size: 16px;
        font-weight: 600;
    }
    .medalIcon {
        margin-right: 2px;
        color: #ecef5a;
        font-size: 18px;
        position: relative;
        top: 4px;
    }
`;
