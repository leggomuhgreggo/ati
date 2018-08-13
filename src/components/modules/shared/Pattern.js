// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { COLOR_MAP } from "constants/index";

const OFFSET = {
  LEFT: "left",
  RIGHT: "right",
};

type Props = {
  color: $Values<typeof COLOR_MAP>,
  offsetDirection?: OFFSET.LEFT | OFFSET.RIGHT,
  children: any,
};

class Pattern extends PureComponent<Props> {
  static defaultProps = {
    offsetDirection: OFFSET.LEFT,
    color: COLOR_MAP.ORANGE,
  };

  getOffsetStyles = () => {
    const { offsetDirection } = this.props;
    const offsetDistance = this.getOffsetDistance();

    return {
      bottom: -offsetDistance,
      [offsetDirection]: -offsetDistance,
    };
  };

  getOffsetDistance = () => {
    const OFFSET = 15;
    return OFFSET;
  };

  getGradient = () => {
    const { color } = this.props;
    const bg = COLOR_MAP.SITE_BG;
    const space = 5;
    const dot = 2;
    const emptyPercent = `${100 - (dot / space) * 100}%`;

    return {
      backgroundColor: color,
      backgroundPosition: "center center",
      backgroundImage: `linear-gradient(90deg, ${bg} ${emptyPercent}, transparent 1%), linear-gradient(${bg} ${emptyPercent}, transparent 1%)`,
      backgroundSize: `${space}px ${space}px`,
    };
  };
  render() {
    const { style } = this.props;
    return (
      <View style={[styles.wrap, style]}>
        <View
          style={[styles.pattern, this.getGradient(), this.getOffsetStyles()]}
        />
        <View>{this.props.children}</View>
      </View>
    );
  }
}

export default Pattern;

const styles = StyleSheet.create({
  wrap: {
    position: "relative",
  },
  pattern: {
    position: "absolute",
    width: "100%",
    height: "100%",
  },
});
