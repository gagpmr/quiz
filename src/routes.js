import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import { Router } from "@reach/router";
import React from "react";
import { Provider } from "react-redux";
import { combineReducers, createStore } from "redux";
import { reducer as reduxFormReducer } from "redux-form";
import History from "./pages/history";
import HistoryAdd from "./pages/history-add";
import Home from "./pages/home";

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
    useNextVariants: true
  }
});

const reducer = combineReducers({
  form: reduxFormReducer
});

const store = (window.devToolsExtension
  ? window.__REDUX_DEVTOOLS_EXTENSION__()(createStore)
  : createStore)(reducer);

const Routes = () => {
  return (
    <Provider store={store}>
      <MuiThemeProvider theme={theme}>
        <Router>
          <Home path="/" />
          <History path="history" />
          <HistoryAdd path="/history-add" />
        </Router>
      </MuiThemeProvider>
    </Provider>
  );
};

export default Routes;
