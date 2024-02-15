import styled from "styled-components";
export const Section = styled.section`
  width: 360px;
  height: 500px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;

export const InputBox = styled.div`
  width: 312px;
  height: 42px;
  border: 1px solid #e3e3e3;
  border-radius: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Div = styled.div`
  width: 360px;
  height: 376px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Input = styled.input`
  width: 80%;
  height: 100%;
  text-indent: 13px;
  border: none;
  border-radius: 10px;
  outline: none;
`;

export const Img = styled.img`
  margin: 0 10px 0 24px;
  margin-right: 10px;
  width: 20px;
  height: 38px;
`;

export const TextBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const Btn = styled.button`
  margin-right: 7px;
  width: 50px;
  height: 24px;
  border-radius: 7px;
  border: none;
  font-size: 10px;
  color: #fff;
  background-color: ${(props) => {
    if (props.state == "none") return "#8E8E93";
    else if (props.state == "false") return "#DC2424";
    else return "#5AC479";
  }};
`;

export const Span = styled.span`
  margin-left: 12px;
  font-size: 12px;
`;
