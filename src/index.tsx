import React from "react";
import ReactDOM from "react-dom";
import { Provider, themes } from "@fluentui/react";
import * as serviceWorker from "serviceWorker";
import "index.css";
import App from "App";
import { useMediaQuery, disableScreenScale } from "utils";
import { BrowserRouter as Router } from "react-router-dom";

disableScreenScale();

function Index() {
  const darkMode = useMediaQuery("(prefers-color-scheme: dark)");
  const theme = React.useMemo(
    () => (darkMode ? themes.teamsDark : themes.teams),
    [darkMode]
  );
  return (
    <Provider theme={theme}>
      <Router>
        <App />
      </Router>
    </Provider>
  );
}

ReactDOM.render(<Index />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
