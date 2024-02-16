import styled from "styled-components";

export default function PageBlock(props) {
  return <PageBox>{props.children}</PageBox>;
}

const PageBox = styled.div`
  padding-left: 13px;
  margin-bottom: 10px;
  width: 347px;
  height: 50px;
  font-size: 21px;
  color: #98989d;
  display: flex;
  justify-content: start;
  align-items: center;
  position: relative;
`;
