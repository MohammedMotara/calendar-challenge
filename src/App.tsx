import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";
import CalendarEventContainer from './container/calendarEventContainer';

class App extends Component {
  public render() {
    return (
      <Provider store={store}>
        <CalendarEventContainer />
      </Provider>
    );
  }
}

export default App;
