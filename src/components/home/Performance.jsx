import { useContext, useEffect, useState } from "react";
import * as s from "../css/home/home";
import { HomeContext } from "../context/context";
import { getUID } from "../../service/auth";
import { getUserAllReviews } from "../../service/db";
export default function Performance() {
  const { showBadge } = useContext(HomeContext);
  const [dataLength, setDataLength] = useState(0);

  useEffect(() => {
    let uid = getUID();
    let func = async () => {
      let temp = await getUserAllReviews(uid);
      if (temp) {
        let key = Object.keys(temp);
        setDataLength(key.length);
      }
    };
    func();
  }, []);

  return (
    <s.Div length={dataLength}>
      {dataLength > 0 ? (
        <>
          <s.BadgeBox>
            {showBadge["1day"] && <s.Badge src="img/1day.png" alt="" />}
            {showBadge["1week"] && <s.Badge src="img/1week.png" alt="" />}
          </s.BadgeBox>
          <s.BadgeBox>
            {showBadge.chart && <s.Badge src="img/chart.png" alt="" />}
          </s.BadgeBox>
        </>
      ) : (
        <span>회고를 작성해 뱃지를 모아보세요!</span>
      )}
    </s.Div>
  );
}
