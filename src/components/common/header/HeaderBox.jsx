import { useLocation } from "react-router-dom";
import * as s from "../../css/common/headerBox";
export default function HeaderBox({ children }) {
  let location = useLocation();
  return (
    <s.Div location={location.pathname}>
      <s.TextBox location={location.pathname}>{children}</s.TextBox>
    </s.Div>
  );
}
