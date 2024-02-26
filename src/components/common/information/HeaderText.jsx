import { INFORMATIONTITLE } from "../key";
import * as s from "../../css/common/information";
export default function HeaderText() {
  let informationTitle = localStorage.getItem(INFORMATIONTITLE) ?? "";
  return (
    <>
      <s.BackBtn />
      <span>{informationTitle}</span>
    </>
  );
}
