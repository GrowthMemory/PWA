import styled from "styled-components";
import { HiLocationMarker } from "react-icons/hi";
import { TiWarning } from "react-icons/ti";

export const RetrospectionBox = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export const Div = styled.div`
  width: 360px;
  height: 490px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const KeepIcon = styled(HiLocationMarker)`
  font-size: 24px;
  color: #5ac479;
`;

export const ProblemIcon = styled(TiWarning)`
  font-size: 24px;
  color: #5ac479;
`;
export const TryIcon = styled.img`
  width: 24px;
  height: 24px;
  color: #5ac479;
`;
