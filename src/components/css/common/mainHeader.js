import styled from "styled-components";
import { BsChevronLeft } from "react-icons/bs";

export const Div = styled.div`
  margin-bottom: ${(props) =>
    props.location == "/Write"
      ? "40px"
      : props.location == "/Calendar"
      ? "31px"
      : props.location == "Report"
      ? "21px"
      : 0};
  width: 360px;
  height: 56px;
  font-size: 16px;
  font-weight: 600;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  background-color: #fff;
`;

export const Back = styled(BsChevronLeft)`
  font-size: 24px;
  position: absolute;
  left: 16px;
`;
