import { useContext } from "react";
import PageBox from "../css/myPage/pageBlock";
import { MyPageContext } from "../context/context";
import { useLocation, useNavigate } from "react-router-dom";
import { FROMPAGE, INFORMATIONTITLE } from "../common/key";
export default function PageBlock(props) {
  const navigate = useNavigate();
  const location = useLocation().pathname;
  return (
    <PageBox
      onClick={(e) => {
        localStorage.setItem(INFORMATIONTITLE, e.target.innerText);
        localStorage.setItem(FROMPAGE, location);
        if (props.readOnly == undefined) navigate("/Information");
      }}
    >
      {props.children}
    </PageBox>
  );
}
