// @flow

import React, { PureComponent, createContext } from "react";
import { Dimensions } from "react-native";

import type { Element } from "react";

const { Provider, Consumer } = createContext();

type Props = {
  children: Element<any>,
};
export class ResponsiveProvider extends PureComponent<Props> {
  state = Dimensions.get("window");

  componentWillMount() {
    Dimensions.addEventListener("change", this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }

  handler = ({ window: windowDims }) => {
    return this.setState(windowDims);
  };

  minWidth = breakpoint => breakpoint <= this.state.width;
  maxWidth = breakpoint => breakpoint > this.state.width;

  render() {
    const { width, height } = this.state;

    return (
      <Provider
        value={{
          width,
          height,
          minWidth: this.minWidth,
          maxWidth: this.maxWidth,
        }}
      >
        {this.props.children}
      </Provider>
    );
  }
}

export default ({ children }) => {
  return <Consumer>{dimProps => children(dimProps)}</Consumer>;
};
