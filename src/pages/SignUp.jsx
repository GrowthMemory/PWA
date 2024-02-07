import { useState } from "react";
import CollectPersonalData from "../components/CollectPersonalData/CollectPersonalData";
import BackHeader from "../components/common/BackHeader";
import SignUpProvider from "../components/SignUpProvider/SignUpPovider";

export default function SignUp() {
  const [currentPage, setCurrentPage] = useState("CollectPersonalData");
  return (
    <>
      <SignUpProvider>
        <BackHeader setCurrentPage={setCurrentPage} />
        {currentPage == "CollectPersonalData" && <CollectPersonalData />}
      </SignUpProvider>
    </>
  );
}
