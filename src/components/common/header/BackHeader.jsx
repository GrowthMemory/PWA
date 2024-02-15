import { useLocation } from "react-router-dom";
import * as s from "../../css/common/backHeader";
export default function BackHeader(props) {
  let location = useLocation();
  return (
    <s.Div>
      <div>
        {location.pathname.replace("/", "") == "SignUp" && <s.CloseIcon />}
        {location.pathname.replace("/", "") == "CreateName" && <s.BackIcon />}
      </div>
    </s.Div>
  );
}
