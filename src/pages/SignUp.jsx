import { useState } from "react";
import CollectPersonalData from "../components/collectPersonalData/CollectPersonalData";
import BackHeader from "../components/common/header/BackHeader";
import SignUpProvider from "../components/SignUpProvider/SignUpPovider";
import CreateName from "../components/createName/CreateName";

export default function SignUp() {
  const [currentPage, setCurrentPage] = useState("CollectPersonalData");
  return (
    <>
      <SignUpProvider>
        <BackHeader setCurrentPage={setCurrentPage} />
        {currentPage == "CollectPersonalData" && <CollectPersonalData />}
        {currentPage == "CreateName" && <CreateName />}
      </SignUpProvider>
    </>
  );
}
