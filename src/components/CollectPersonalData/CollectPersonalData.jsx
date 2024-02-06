import HeaderText from "../common/HeaderText";
import Button from "../common/Button";
import Terms from "../common/Terms";
import TermsBox from "./TermsBox";
import styled from "styled-components";

export default function CollectPersonalData() {
  return (
    <>
      <Section>
        <HeaderText />
        <Button num={0} />
        <TermsBox />
        <Button num={1} />
      </Section>
    </>
  );
}

const Section = styled.section`
  width: 360px;
  height: 464px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
