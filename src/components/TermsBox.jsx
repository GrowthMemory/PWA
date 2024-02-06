import { useContext, useEffect } from "react";
import Terms from "./common/Terms";
import { SignUpContext } from "./SignUpContext";
import styled from "styled-components";

export default function TermsBox() {
  const { isChecked } = useContext(SignUpContext);

  return (
    <Box>
      {isChecked.map((obj, n) => (
        <Terms text={obj.tetx} key={obj.text} num={n} />
      ))}
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 298px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* position: relative; */
`;
