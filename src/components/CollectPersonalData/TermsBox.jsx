import { useContext, useEffect } from "react";
import Terms from "../common/Terms";
import { SignUpContext } from "../context/context";
import styled from "styled-components";

export default function TermsBox() {
  const { isChecked } = useContext(SignUpContext);
  return (
    <Box>
      {isChecked.map((obj, n) => (
        <Terms text={obj.text} key={obj.text} num={n} />
      ))}
    </Box>
  );
}

const Box = styled.div`
  width: 100%;
  height: 270px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  /* background-color: bisque; */
  /* position: relative; */
`;
