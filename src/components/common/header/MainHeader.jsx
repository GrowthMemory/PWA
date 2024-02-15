import { useLocation } from "react-router-dom";
import * as s from "../../css/common/mainHeader";

export default function MainHeader(props) {
  const location = useLocation().pathname;
  return (
    <s.Div location={location}>
      <s.TextBox>{props.children}</s.TextBox>
    </s.Div>
  );
}
