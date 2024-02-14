import styled from "styled-components";

export default function CurrentStatus() {
  return (
    <Div>
      <Title>현재 나의 상태는 이래요!</Title>
      <Status>status</Status>
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
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
`;
