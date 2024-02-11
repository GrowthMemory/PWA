import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../service/auth";

function IsLoginTemplate(props) {
    const navigate = useNavigate();

    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                navigate("/Home");
            } else {
                navigate("/Login");
            }
        });
    }, [auth]);

    return <>{props.children}</>;
}

export default IsLoginTemplate;
