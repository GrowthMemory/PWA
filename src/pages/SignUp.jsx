import CollectPersonalData from "../components/CollectPersonalData/CollectPersonalData";
import BackHeader from "../components/common/BackHeader";
import SignUpProvider from "../components/SignUpProvider/SignUpPovider";

export default function SignUp() {
  return (
    <>
      <SignUpProvider>
        <BackHeader />
        <CollectPersonalData />
      </SignUpProvider>
    </>
  );
}
