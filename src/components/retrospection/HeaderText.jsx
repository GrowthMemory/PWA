import { FaLeaf } from "react-icons/fa";
import { IoTriangle } from "react-icons/io5";
import { BsChevronLeft } from "react-icons/bs";
import { useContext } from "react";
import { WriteContext } from "../context/context";
export default function HeaderText() {
  const { retrospectionData, updateRetrospectionData } =
    useContext(WriteContext);
  return (
    <>
      <div className="backBtn">
        <BsChevronLeft />
      </div>
      <div className="text">
        <FaLeaf className="leafIcon" />
        <span>
          {retrospectionData.date.month}월{retrospectionData.date.date}일의 회고
        </span>
        <IoTriangle className="calendarBtn" />
      </div>
    </>
  );
}
