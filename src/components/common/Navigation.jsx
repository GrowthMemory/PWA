import styled from "styled-components";
import { MdHome } from "react-icons/md";
import { PiChartLine } from "react-icons/pi";
import { FaCalendar } from "react-icons/fa";
import { BsChatFill } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { useLocation, useNavigate } from "react-router-dom";
import * as s from "../css/common/navigation";

export default function Navigation() {
  const location = useLocation().pathname;
  const navigate = useNavigate();
  return (
    <s.Div>
      <MdHome
        style={location == "/Home" ? { color: "#5ac479" } : ""}
        onClick={() => navigate("/Home")}
      />
      <PiChartLine
        style={location == "/Report" ? { color: "#5ac479" } : ""}
        onClick={() => navigate("/Report")}
      />
      <FaCalendar
        style={location == "/Calendar" ? { color: "#5ac479" } : ""}
        onClick={() => navigate("/Calendar")}
      />
      <BsChatFill style={location == "/Chat" ? { color: "#5ac479" } : ""} />
      <IoMdSettings style={location == "/MyPage" ? { color: "#5ac479" } : ""} />
    </s.Div>
  );
}
