import styled from "styled-components";

export const Div = styled.div`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: rgba(0, 0, 0, 0.6);
`;

export const NoticeBox = styled.div`
  width: 300px;
  height: 200px;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-evenly;
  background-color: #fff;
  z-index: 2;

  span {
    margin-top: 40px;
  }
`;

export const Button = styled.button`
  width: 150px;
  height: 45px;
  border: none;
  border-radius: 5px;
  color: #fff;
  position: relative;
  top: 15px;
  background-color: #5ac479;
  outline: none;
`;
