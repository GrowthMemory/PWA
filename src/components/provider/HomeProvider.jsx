import { useState } from "react";
import { HomeContext } from "../context/context";

export default function HomeProvider(props) {
  const [retrospectionNumber, setRetrospectionNumber] = useState(1);
  const [wiseSaying, setWiseSaying] = useState({ txt: "", author: "" });
  const [retrospectionData, setRetrospectionData] = useState([]);
  return (
    <HomeContext.Provider
      value={{
        retrospectionNumber,
        setRetrospectionNumber,
        wiseSaying,
        setWiseSaying,
        retrospectionData,
        setRetrospectionData,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
