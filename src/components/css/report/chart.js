import styled from "styled-components";

export const Div = styled.div`
  z-index: 1;
`;

export const RetrospectionNumber = styled.p`
  width: 100%;
  height: 28px;
  font-size: 13px;
  font-weight: 400px;

  span {
    color: #5ac479;
    font-size: 17px;
    font-weight: 700;
  }
`;
export const Title = styled.p`
  width: 177px;
  height: 28px;
  font-size: 13px;
  font-weight: 600;
`;

export const LineChart = styled.div`
  padding-left: 5px;
  width: 300px;
  height: 208px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  z-index: 1;
`;

export const ChartColor = styled.div`
  padding-left: 5px;
  width: 300px;
  height: 208px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background: #fff;
  box-shadow: 0px 0px 8px 0px rgba(0, 0, 0, 0.3);
`;
