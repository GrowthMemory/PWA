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
    props.location == "/Write"
      ? "0 0 40px 0"
      : props.location == "/Calendar"
      ? "0 0 31px 0"
      : "0 0 21px 0"};
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
`;
