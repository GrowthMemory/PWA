import styled from "styled-components";
import { RxCross1 } from "react-icons/rx";
import { BsChevronLeft } from "react-icons/bs";
import { useLocation } from "react-router-dom";
export default function BackHeader(props) {
  let location = useLocation();
  return (
    <Div>
      <div>
        {location.pathname.replace("/", "") == "SignUp" && <CloseIcon />}
        {location.pathname.replace("/", "") == "CreateName" && <BackIcon />}
      </div>
    </Div>
  );
}

const Div = styled.div`
  margin-top: 44px;
  width: 360px;
  height: 56px;
  position: relative;
`;

const CloseIcon = styled(RxCross1)`
  font-size: 26px;
  position: absolute;
  right: 24px;
`;

const BackIcon = styled(BsChevronLeft)`
  font-size: 26px;
  position: absolute;
  left: 24px;
`;
