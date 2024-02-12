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
      <MdHome style={location == "/Home" ? { color: "#5ac479" } : ""} />
      <PiChartLine style={location == "/Report" ? { color: "#5ac479" } : ""} />
      <FaCalendar style={location == "/Calendar" ? { color: "#5ac479" } : ""} />
      <BsChatFill style={location == "/Chat" ? { color: "#5ac479" } : ""} />
      <IoMdSettings style={location == "/MyPage" ? { color: "#5ac479" } : ""} />
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
`;
