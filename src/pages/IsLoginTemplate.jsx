import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { firebaseAuth } from "../service/firebaseConfig";

function IsLoginTemplate(props) {
  const navigate = useNavigate();

  useEffect(() => {
    if (firebaseAuth.currentUser) {
      navigate("/Home");
    }
  }, []);

  return <>{props.children}</>;
}

export default IsLoginTemplate;
