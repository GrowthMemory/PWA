import { useContext } from "react";
import HeaderBox from "./HeaderBox";
import HeaderText from "./HeaderText";
import { SignUpContext } from "../../context/SignUpContext";

export default function Header() {
  const { signUpStep } = useContext(SignUpContext);
  return (
    <HeaderBox>
      <HeaderText text={signUpStep} />
    </HeaderBox>
  );
}
