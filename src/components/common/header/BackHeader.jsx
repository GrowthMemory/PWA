import { useLocation, useNavigate } from "react-router-dom";
import * as s from "../../css/common/backHeader";
export default function BackHeader(props) {
  let location = useLocation();
  const navigate = useNavigate();
  return (
    <s.Div>
      <div>
        {location.pathname.replace("/", "") == "SignUp" && (
          <s.CloseIcon
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
        {location.pathname.replace("/", "") == "CreateName" && (
          <s.BackIcon
            onClick={() => {
              navigate(-1);
            }}
          />
        )}
      </div>
    </s.Div>
  );
}
