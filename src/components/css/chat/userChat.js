import styled from "styled-components";

export const Div = styled.div`
  margin-right: 16px;
  width: auto;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: end;
`;

export const Chat = styled.div`
  margin-bottom: 4px;
  padding: 10px 12px 10px 12px;
  width: auto;
  max-width: 250px;
  height: auto;
  border-radius: 10px 10px 0px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 120%;
  display: flex;
  flex-wrap: wrap;
  background: #f1bf91;

  p {
    width: 163px;
    height: auto;
    display: flex;
    flex-wrap: wrap;
  }
`;

export const Time = styled.span`
  margin-left: 5px;
  color: #8e8e93;
  font-size: 11px;
  font-weight: 400;
`;
