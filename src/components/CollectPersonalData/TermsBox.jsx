import { useContext, useEffect } from "react";
import Terms from "../common/Terms";
import { SignUpContext } from "../context/context";
import * as s from "../css/collectPersonalDate/termsBox";
export default function TermsBox() {
  const { isChecked } = useContext(SignUpContext);
  return (
    <s.Box>
      {isChecked.map((obj, n) => (
        <Terms text={obj.text} key={obj.text} num={n} />
      ))}
    </s.Box>
  );
}
