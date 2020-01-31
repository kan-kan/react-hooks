import React, { useEffect, useReducer } from "react";

import "bootstrap/dist/css/bootstrap.min.css";

import Events from "./Events";
import OperationLogs from "./OperationLogs";
import EventForm from "./EventForm";
import reducer from "../reducers";
import AppContext from "../contexts/AppContext";

const App = () => {
  const localState = localStorage.getItem("state");
  const initialState = localState
    ? JSON.parse(localState)
    : {
        events: [],
        operationLogs: []
      };
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    localStorage.setItem("state", JSON.stringify(state));
  }, [state]);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="container-fluid">
        <EventForm />
        <Events />
        <OperationLogs />
      </div>
    </AppContext.Provider>
  );
};

export default App;
