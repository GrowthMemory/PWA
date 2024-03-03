import { useContext, useEffect } from "react";
import { WriteContext } from "../context/context";
import { ReadReview } from "../../service/db";
import { getUserAllReviews } from "../../service/db";
import { getUID } from "../../service/auth";
import * as s from "../css/retrospection/writeBox";
export default function WriteBox(props) {
  const {
    retrospectionData,
    updateRetrospectionData,
    setCheckRetrospection,
    data,
    updateData,
    correctDate,
    setCorrectDate,
  } = useContext(WriteContext);

  let date = [
    retrospectionData.date.year,
    retrospectionData.date.month,
    retrospectionData.date.date,
  ];

  date[0] = date[0] - 2000;

  let dateText = `${date[0]}-${date[1]}-${date[2]}`;

  useEffect(() => {
    setCorrectDate(false);
    if (
      retrospectionData.text.keep != null &&
      retrospectionData.text.problem != null &&
      retrospectionData.text.try != null
    ) {
      setCheckRetrospection(true);
    } else {
      setCheckRetrospection(false);
    }
    updateData((data) => {
      data = {};
    });
    let uid = getUID();
    checkDate(uid, dateText, setCorrectDate, correctDate);
  }, [retrospectionData]);

  useEffect(() => {
    let uid = getUID();
    if (correctDate) {
      getData(uid, updateData, dateText);
    } else {
      updateData((data) => {
        delete data.keep;
        delete data.problem;
        delete data.try;
      });
    }
  }, [correctDate]);
  return (
    <>
      <s.Title>{props.children}</s.Title>
      <s.TextArea
        maxLength={600}
        onChange={(e) => {
          if (props.id == "keep" && e.target.value.length >= 10) {
            updateRetrospectionData((data) => {
              data.text.keep = e.target.value;
            });
          } else if (props.id == "problem" && e.target.value.length >= 10) {
            updateRetrospectionData((data) => {
              data.text.problem = e.target.value;
            });
          } else if (props.id == "try" && e.target.value.length >= 10) {
            updateRetrospectionData((data) => {
              data.text.try = e.target.value;
            });
          }
        }}
        readOnly={data.keep != undefined ? true : false}
        defaultValue={data.keep != undefined ? data[props.id] : ""}
      ></s.TextArea>
    </>
  );
}

let checkDate = async (uid, dateText, setCorrectDate, correctDate) => {
  let temp = await getUserAllReviews(uid);
  if (temp) {
    let key = Object.keys(temp);
    for (let i = 0; i < key.length; i++) {
      if (key[i] == dateText) {
        setCorrectDate(true);
        break;
      } else {
        setCorrectDate(false);
      }
    }
  }
};

let getData = async (uid, updateData, dateText) => {
  let temp = await ReadReview(uid, dateText);
  await updateData((data) => {
    data["keep"] = temp.Keep;
    data["problem"] = temp.Problem;
    data["try"] = temp.Try;
  });
};
