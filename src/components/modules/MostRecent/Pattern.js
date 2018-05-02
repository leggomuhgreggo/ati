// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { CATEGORY_COLOR_MAP } from "../../../constants";

const HEADER_HEIGHT = 60;

type Props = {
  color?: $Values<typeof CATEGORY_COLOR_MAP>,
  children: any,
};

class Pattern extends Component<Props> {
  getGradient = () => {
    const { color } = this.props;
    const bg = "white";
    const space = 10;
    const dot = 2.5;
    const dotPercent = `${dot / space * 100}%`;
    const emptyPercent = `${100 - dot / space * 100}%`;

    return {
      backgroundColor: color,
      backgroundPosition: "center center",
      backgroundImage: `linear-gradient(90deg, ${bg} ${emptyPercent}, transparent 1%), linear-gradient(${bg} ${emptyPercent}, transparent 1%)`,
      backgroundSize: `${space}px ${space}px`,
    };
  };
  render() {
    return (
      <View style={[styles.wrap]}>
        <View style={[styles.pattern, this.getGradient()]} />
        {this.props.children}
      </View>
    );
  }
}

export default Pattern;

const OFFSET = 30;

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
  },
  pattern: {
    position: "absolute",
    bottom: -OFFSET,
    left: -OFFSET,
    width: "100%",
    height: "100%",
  },
});
