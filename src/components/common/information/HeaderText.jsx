import { INFORMATIONTITLE } from "../key";
import * as s from "../../css/common/information";
import { useNavigate } from "react-router-dom";
export default function HeaderText() {
  let informationTitle = localStorage.getItem(INFORMATIONTITLE) ?? "";
  const navigate = useNavigate();
  return (
    <>
      <s.BackBtn
        onClick={() => {
          navigate(-1);
        }}
      />
      <span>{informationTitle}</span>
    </>
  );
}
