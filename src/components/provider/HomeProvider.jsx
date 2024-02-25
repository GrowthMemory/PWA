import { useState } from "react";
import { HomeContext } from "../context/context";
import { useImmer } from "use-immer";

export default function HomeProvider(props) {
  const [retrospectionNumber, setRetrospectionNumber] = useState(0);
  const [wiseSaying, setWiseSaying] = useState({ txt: "", author: "" });
  const [retrospectionData, setRetrospectionData] = useState([]);
  const [showBadge, setShowBadge] = useImmer({
    "1day": false,
    "1week": false,
    chart: localStorage.getItem("visitedChart") ?? false,
  });
  return (
    <HomeContext.Provider
      value={{
        retrospectionNumber,
        setRetrospectionNumber,
        wiseSaying,
        setWiseSaying,
        retrospectionData,
        setRetrospectionData,
        showBadge,
        setShowBadge,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
