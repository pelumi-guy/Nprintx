import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Fragment, useEffect } from "react";
import AppRoutes from "./routes/Routes";
import { reloadUser } from "./actions/authActions";
import store from "./store";

function App() {
  useEffect(() => {
    store.dispatch(reloadUser());
  }, []);

  return (
    <Fragment>
      <AppRoutes />
    </Fragment>
  );
}

export default App;
