// @flow

import React, { PureComponent, createContext } from "react";
import { Dimensions } from "react-native";
import type { Element } from "react";

const { Provider, Consumer } = createContext();

type Coordinate = [number, number];
type GetSlope = [Coordinate, Coordinate];
type Slope = { slope: number };
type GetIntercept = { point: Coordinate } & Slope;
type FluidSizeType = {
  min: number,
  max: number,
  lockMin?: number,
  lockMax?: number,
};
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

  getSlope = ([[x1, y1], [x2, y2]]: GetSlope) => (y2 - y1) / (x2 - x1);
  getIntercept = ({ point: [x, y], slope }: GetIntercept) => y - slope * x;
  makeLockFunc = () => {
    const { width } = this.state;
    return ({
      min: y1,
      max: y2,
      lockMin: x1 = 400,
      lockMax: x2 = 1000,
    }: FluidSizeType) => {
      const slope = this.getSlope([[x1, y1], [x2, y2]]);
      const intercept = this.getIntercept({ point: [x1, y1], slope });
      return width < x1 ? y1 : width >= x2 ? y2 : slope * width + intercept;
    };
  };

  render() {
    const { width, height } = this.state;

    return (
      <Provider
        value={{
          width,
          height,
          minWidth: this.minWidth,
          maxWidth: this.maxWidth,
          getLock: this.makeLockFunc(),
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
