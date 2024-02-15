import { useContext } from "react";
import styled from "styled-components";
import { ReportContext } from "../context/context";

export default function CurrentStatus() {
  const { currentStatusObj, setCurrentStatusObj } = useContext(ReportContext);
  return (
    <Div>
      <Title>현재 나의 상태는 이래요!</Title>
      <Status>
        <Input
          type="range"
          id="volume"
          name="volume"
          min="0"
          max="100"
          defaultValue={currentStatusObj.score}
          readOnly
        />
        <p>
          {`평균 ${currentStatusObj.score}점 입니다. ${currentStatusObj.text} 상태에요`}
        </p>
      </Status>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 24px;
  width: 312px;
  height: 115px;
`;

const Title = styled.p`
  width: 126px;
  height: 28px;
  font-size: 13px;
  font-weight: 600;
`;

const Status = styled.div`
  width: 100%;
  height: 85px;
  border-radius: 15px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
`;

const Input = styled.input`
  width: 288px;
  height: 20px;
  -webkit-appearance: none;

  &::-webkit-slider-runnable-track {
    width: 100%;
    height: 16px;
    border-radius: 20px;
    background: linear-gradient(
      270deg,
      #29e05f 1.41%,
      rgba(121, 255, 160, 0.16) 99.98%
    );
  }
  &::-webkit-slider-thumb {
    -webkit-appearance: none;
    width: 24px;
    height: 24px;
    border-radius: 100px;
    border: 4px solid var(--primary, #5ac479);
    position: relative;
    bottom: 4px;
    background: #fff;
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.1);
  }
`;
