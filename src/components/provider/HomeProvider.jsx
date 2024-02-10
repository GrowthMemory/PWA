import { useState } from "react";
import { HomeContext } from "../context/context";

export default function HomeProvider(props) {
  const [retrospectionNumber, setRetrospectionNumber] = useState(1);
  const [wiseSaying, setWiseSaying] = useState({ txt: "", author: "" });
  return (
    <HomeContext.Provider
      value={{
        retrospectionNumber,
        setRetrospectionNumber,
        wiseSaying,
        setWiseSaying,
      }}
    >
      {props.children}
    </HomeContext.Provider>
  );
}
