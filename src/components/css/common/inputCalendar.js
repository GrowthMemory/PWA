import styled from "styled-components";

export const Triangle = styled.div`
  width: 0;
  height: 0;
  border-bottom: 10px solid #a5a5a5;
  border-left: 10px solid transparent;
  border-right: 10px solid transparent;
  position: ${(props) =>
    props.location == "/Report"
      ? "relative"
      : props.location == "/Write"
      ? "absolute"
      : ""};
  top: ${(props) =>
    props.location == "/Report"
      ? "31px"
      : props.location == "/Write"
      ? "46px"
      : ""};
  right: ${(props) =>
    props.location == "/Report"
      ? props.showCategoryBtn
        ? "48px"
        : "90px"
      : props.location == "/Write"
      ? "170px"
      : ""};
  z-index: 2;

  &::before {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-bottom: 10px solid #f9f9f9;
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    position: absolute;
    top: 2px;
    left: -9.5px;
  }
`;

export const Div = styled.div`
  width: 210px;
  height: 230px;
  border: 1px solid #a5a5a5;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  top: ${(props) =>
    props.location == "/Report"
      ? "40px"
      : props.location == "/Write"
      ? "55px"
      : ""};
  right: ${(props) =>
    props.location == "/Report"
      ? "50px"
      : props.location == "/Write"
      ? "75px"
      : ""};
  background-color: #f9f9f9;
`;

export const HandleDate = styled.div`
  width: 100%;
  height: 30px;
  font-size: 15px;
  display: flex;
  justify-content: center;
  align-items: center;

  span {
    margin: 0 30px 0 30px;
  }
`;

export const Table = styled.table`
  width: 100%;
  height: 200px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Thead = styled.thead`
  width: 100%;
  height: 30px;
  border-bottom: 1px solid #a5a5a5;

  tr {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }

  th {
    width: 25px;
    height: 25px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: 100;
  }
`;

export const Tbody = styled.tbody`
  padding: 3px 3px 5px 3px;
  width: 100%;
  height: 170px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  tr {
    width: 100%;
    height: 15%;
    display: flex;
    justify-content: space-evenly;
    align-items: center;
  }
`;

export const Td = styled.td`
  width: 25px;
  height: 25px;
  color: ${(props) =>
    props.date == props.start || props.date == props.end ? "#f9f9f9" : "black"};
  border-radius: 3px;
  font-size: 13px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.location == "/Report"
      ? props.date == props.start || props.date == props.end
        ? "#5ac479"
        : ""
      : props.location == "/Write"
      ? props.date == props.write
        ? "#5ac479"
        : ""
      : ""};
`;
