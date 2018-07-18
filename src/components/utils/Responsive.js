// @flow

import { PureComponent } from "react";
import { Dimensions } from "react-native";

import type { Element } from "react";

import { BREAKPOINTS } from "constants.js";

type Props = {
  children: Element<any>,
  onChange?: Function,
};

class Responsive extends PureComponent<Props> {
  static defaultProps = {
    onChange: null,
  };

  state = Dimensions.get("window");

  handler = ({ window: windowDims }) => {
    this.props.onChange && this.props.onChange(windowDims);
    return this.setState(windowDims);
  };

  componentWillMount() {
    Dimensions.addEventListener("change", this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }

  minWidth = breakpoint => breakpoint <= this.state.width;
  maxWidth = breakpoint => breakpoint > this.state.width;

  getBreakpointFromWidth = width => {
    const { 0: currentBreakpoint, 1: currentBreakpointWidth } = Object.entries(
      BREAKPOINTS,
    ).find(({ 1: currentBreakpoint }, index, breakpointsEntries) => {
      const { 1: nextBreakpoint } = breakpointsEntries[index + 1];
      return currentBreakpoint <= width && width < nextBreakpoint;
    });

    return {
      currentBreakpoint,
      currentBreakpointWidth,
    };
  };

  render() {
    const { width, height } = this.state;

    const {
      currentBreakpoint,
      currentBreakpointWidth,
    } = this.getBreakpointFromWidth(width);

    return this.props.children({
      width,
      height,
      currentBreakpoint,
      currentBreakpointWidth,
      minWidth: this.minWidth,
      maxWidth: this.maxWidth,
    });
  }
}

export default Responsive;
