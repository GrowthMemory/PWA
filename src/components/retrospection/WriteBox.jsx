import { useContext } from "react";
import styled from "styled-components";
import { WriteContext } from "../context/context";

export default function WriteBox(props) {
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  return (
    <>
      <Title>{props.children}</Title>
      <TextArea
        maxLength={600}
        onChange={(e) => {
          if (props.id == "keep") {
            updateRetrospectionData((data) => {
              data.text.keep = e.target.value;
            });
          } else if (props.id == "problem") {
            updateRetrospectionData((data) => {
              data.text.problem = e.target.value;
            });
          } else {
            updateRetrospectionData((data) => {
              data.text.try = e.target.value;
            });
          }
        }}
      ></TextArea>
    </>
  );
}

const Title = styled.div`
  margin-bottom: 9px;
  width: 312px;
  height: 25px;
  font-size: 14px;
  font-weight: 600;
  display: flex;
  align-items: center;

  .icon {
    width: 24px;
    height: 24px;
    color: #5ac479;
  }
`;
const TextArea = styled.textarea`
  padding: 5px;
  margin-bottom: 20px;
  width: 302px;
  height: 112px;
  border: none;
  border-radius: 5px;
  font-size: 12px;
  box-shadow: 0px 0px 10px 0px rgba(0, 0, 0, 0.1);
  resize: none;
  outline: none;
  background: #fff;
`;
