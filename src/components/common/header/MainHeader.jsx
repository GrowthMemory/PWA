import { useLocation } from "react-router-dom";
import styled from "styled-components";

export default function MainHeader(props) {
  const location = useLocation().pathname;
  return (
    <Div location={location}>
      <TextBox>{props.children}</TextBox>
    </Div>
  );
}

const Div = styled.div`
  margin: ${(props) =>
    props.location == "/Write" ? "44px 0 40px 0" : "44px 0 31px 0"};
  width: 360px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
`;

const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;

  .backBtn {
    width: 45px;
    height: 45px;
    font-size: 18px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    left: 24px;
  }
  .text {
    width: 160px;
    height: 100%;
    font-size: 16px;
    font-weight: 600;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .leafIcon {
    margin-right: 4px;
    font-size: 22px;
    color: #5ac479;
  }
  .calendarBtn {
    margin-left: 3px;
    font-size: 15px;
    transform: rotate(180deg);
  }
`;
