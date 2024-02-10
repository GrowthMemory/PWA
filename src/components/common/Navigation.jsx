import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { PiChartLine } from "react-icons/pi";
import { FaCalendar } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { useLocation } from "react-router-dom";

export default function Navigation() {
  const location = useLocation().pathname;
  return (
    <Div>
      <MdHome className={location == "/Home" ? "focus" : ""} />
      <PiChartLine className={location == "/Report" ? "focus" : ""} />
      <FaCalendar className={location == "/Calendar" ? "focus" : ""} />
      <BsChatFill className={location == "/Chat" ? "focus" : ""} />
      <IoMdSettings className={location == "/MyPage" ? "focus" : ""} />
    </Div>
  );
}

const Div = styled.div`
  width: 360px;
  height: 56px;
  font-size: 24px;
  color: #aeaeb2;
  display: flex;
  justify-content: space-evenly;
  align-items: center;

  .focus {
    color: #5ac479;
  }
`;
