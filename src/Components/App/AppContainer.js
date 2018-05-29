import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props){
    // 스토어에 적용할 함수는 반드시 이 안에 있어야 함!
    super(props);

    // 실질적인 store
    this.state = {
      notifications: {
        "1": {
          id: 1,
          text: "something",
          seen: false,
        }, "2": {
          id: 2,
          text: "something else",
          seen: false,
        }, "3": {
          id: 3,
          text: "something else but different",
          seen: false,
        }
      }
    }
  }
  render() {
    return (
      <Store.Provider value={this.state}>
        <AppPresenter />
      </Store.Provider>
    );
  }
}

export default AppContainer;
