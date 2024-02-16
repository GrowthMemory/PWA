import { useState } from "react";
import { MyPageContext } from "../context/context";

export default function MyPageProvider(props) {
  const [userName, setUserName] = useState(null);
  return (
    <MyPageContext.Provider value={{ userName, setUserName }}>
      {props.children}
    </MyPageContext.Provider>
  );
}
