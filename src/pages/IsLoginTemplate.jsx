import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { firebaseAuth } from "../service/firebaseConfig";

function IsLoginTemplate(props) {
  const navigate = useNavigate();

  useEffect(() => {
    console.log(firebaseAuth.currentUser);
    if (firebaseAuth.currentUser) {
      navigate("/loginSuccess");
    }
  }, []);

  return <>{props.children}</>;
}

export default IsLoginTemplate;
