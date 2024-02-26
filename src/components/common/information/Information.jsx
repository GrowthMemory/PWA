import Navigation from "../Navigation";
import MainHeader from "../header/MainHeader";
import MyPageProvider from "../../provider/MyPageProvider";
import HeaderText from "./HeaderText";
import InformationText from "./InformationText";
export default function Information() {
  return (
    <>
      <MainHeader>
        <HeaderText />
      </MainHeader>
      <MyPageProvider>
        <InformationText />
      </MyPageProvider>
      <Navigation />
    </>
  );
}
