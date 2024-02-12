import { useContext } from "react";
import styled from "styled-components";
import { CalendarContext, WriteContext } from "../context/context";
import { useNavigate } from "react-router-dom";

export default function GoingRetrospection() {
  const { showModal, setShowModal, tempDate } = useContext(CalendarContext);
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  const navigate = useNavigate();
  return (
    <Div>
      <Modal>
        <span>회고를 작성하시겠어요?</span>
        <BtnBox>
          <LeftBtn
            onClick={() => {
              setShowModal(false);
            }}
          >
            아니오
          </LeftBtn>
          <RightBtn
            onClick={() => {
              setShowModal(false);
              navigate("/Write");
            }}
          >
            네
          </RightBtn>
        </BtnBox>
      </Modal>
    </Div>
  );
}

const Div = styled.div`
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

const Modal = styled.div`
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

const BtnBox = styled.div`
  width: 100%;
  height: 48px;

  button {
    width: 50%;
    height: 100%;
    border: none;
  }
`;

const LeftBtn = styled.button`
  border-bottom-left-radius: 5px;
  color: #8e8e93;
  background-color: 3e3E3E3;
`;

const RightBtn = styled.button`
  border-bottom-right-radius: 5px;
  color: #fff;
  background-color: #5ac479;
`;
