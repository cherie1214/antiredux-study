import React, { Component } from "react";
import AppPresenter from "./AppPresenter";
import Store from "store";

class AppContainer extends Component {
  constructor(props){
    // 스토어에 적용할 함수는 반드시 이 안에 있어야 함!
    super(props);

    this._changeMessage = () => {
      if(this.state.message === "Hello") {
        this.setState({
          message: "Bye bye"
        })
      } else {
        this.setState({
          message: "Hello"
        })
      }
    }

    // 실질적인 store
    this.state = {
      message: "Hello",
      changeMessage: this._changeMessage,
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
