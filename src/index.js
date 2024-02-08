import React from "react";
import ReactDOM from "react-dom/client";

import router from "./router";
import * as serviceWorkerRegistration from "./serviceWorkerRegistration";
import { RouterProvider } from "react-router-dom";
import GlobalStyles from "./styles/GlobalStyles";

//develop branch
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <>
    <GlobalStyles />
    <RouterProvider router={router} />
  </>
);

serviceWorkerRegistration.register();
