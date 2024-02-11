import HeaderBox from "../components/common/header/HeaderBox";
import Button from "../components/common/Button";
import Terms from "../components/common/Terms";
import TermsBox from "../components/CollectPersonalData/TermsBox";
import styled from "styled-components";
import { Context } from "../components/context/context";
import { useContext } from "react";
import SignUpProvider from "../components/provider/SignUpPovider";
import BackHeader from "../components/common/header/BackHeader";

export default function CollectPersonalData() {
    return (
        <>
            <SignUpProvider>
                <BackHeader />
                <Section>
                    <HeaderBox>
                        <span>서비스 이용을 위해</span>
                        <span>{"약관 동의를 해주세요 :)"}</span>
                    </HeaderBox>
                    <Button text={"agree"} />
                    <TermsBox />
                    <Button text={"next"} />
                </Section>
            </SignUpProvider>
        </>
    );
}

const Section = styled.section`
    width: 360px;
    height: 500px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;
    /* background-color: aqua; */
`;
