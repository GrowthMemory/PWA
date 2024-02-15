import styled from "styled-components";

export const Div = styled.div`
  width: 360px;
  height: 596px;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 44px;
  z-index: 2;
`;

export const Modal = styled.div`
  width: 311px;
  height: 142px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;

  span {
    margin-top: 41px;
  }
`;

export const BtnBox = styled.div`
  width: 100%;
  height: 48px;

  button {
    width: 50%;
    height: 100%;
    border: none;
  }
`;

export const LeftBtn = styled.button`
  border-bottom-left-radius: 5px;
  color: #8e8e93;
  background-color: 3e3E3E3;
`;

export const RightBtn = styled.button`
  border-bottom-right-radius: 5px;
  color: #fff;
  background-color: #5ac479;
`;
