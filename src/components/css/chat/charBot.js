import styled from "styled-components";

export const Div = styled.div`
  margin: 20px 0 0 16px;
  width: auto;
  height: auto;
  display: flex;
`;

export const ImgBox = styled.div`
  margin-right: 8px;
  width: 36px;
  height: 36px;
  border-radius: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fff;

  img {
    width: 14px;
    height: 25px;
  }
`;

export const ChatBox = styled.div`
  width: auto;
  height: auto;
`;
export const Chat = styled.div`
  padding: 10px 12px 10px 12px;
  width: auto;
  max-width: 180px;
  height: auto;
  border-radius: 0px 10px 10px 10px;
  color: #fff;
  font-size: 14px;
  line-height: 120%;
  background: #77c98f;

  p {
    width: 165px;
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
