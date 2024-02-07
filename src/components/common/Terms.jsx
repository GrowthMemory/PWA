import { IoCheckmarkOutline } from "react-icons/io5";
import { useContext, useEffect } from "react";
import styled from "styled-components";
import { SignUpContext } from "../context/SignUpContext";
export default function Terms(props) {
  const { setAgreement, updateIsChecked, isChecked } =
    useContext(SignUpContext);
  // console.log();
  return (
    <Box>
      <Header checked={isChecked[props.num].checked}>
        <IoCheckmarkOutline
          className="checkIcon"
          onClick={(e) => {
            updateIsChecked((update) => {
              update[props.num].checked = !update[props.num].checked;
            });
            if (!isChecked[props.num].checked) {
              setAgreement((prev) => (prev += 1));
            } else {
              setAgreement((prev) => (prev -= 1));
            }
          }}
        />
        <span>{props.text}</span>
        <Essential>{"(필수)"}</Essential>
      </Header>
      <TextBox>
        <p>
          약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다약관이 들어갑니다약관이 들어갑니다약관이
          들어갑니다약관이 들어갑니다
        </p>
      </TextBox>
    </Box>
  );
}
const Box = styled.div`
  width: 293px;
  height: 86px;
`;
const Header = styled.div`
  width: 293px;
  height: 25px;
  font-size: 13px;
  font-weight: 600;
  display: flex;
  align-items: center;

  .checkIcon {
    font-size: 24px;
    color: ${(props) => (props.checked ? "#5AC479" : "#C6C6C6")};
  }
`;

const CheckBox = styled.input`
  appearance: none;
  background-image: url(${`${process.env.PUBLIC_URL}/img/check.png`});
  width: 24px;
  height: 24px;

  &:checked {
    width: 24px;
    height: 25px;
    background-image: url(${`${process.env.PUBLIC_URL}/img/checked.png`});
    position: relative;
    top: 1px;
  }
`;

const Essential = styled.span`
  margin-left: 2px;
  color: #5ac479;
`;
const TextBox = styled.div`
  width: 293px;
  height: 50px;
  border-radius: 5.707px;
  border: 1px solid #e3e3e3;
  font-size: 11px;
  line-height: 17px;
  overflow: hidden;
`;
