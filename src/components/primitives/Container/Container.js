// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

const CONTAINER_TYPES = {
  READABILITY: "readability",
  CONTENT: "content",
  DEFAULT: "default",
};

const MAX_WIDTHS = {
  [CONTAINER_TYPES.READABILITY]: 800,
  [CONTAINER_TYPES.CONTENT]: 1110,
  [CONTAINER_TYPES.DEFAULT]: "100%",
};

type Props = {
  rest?: any,
  style?: StyleObj,
  type?: $Values<typeof CONTAINER_TYPES>,
};

class Container extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    rest: {},
    type: CONTAINER_TYPES.DEFAULT,
  };

  getMaxWidth = () => MAX_WIDTHS[this.props.type];

  render() {
    const { style, ...rest } = this.props;

    const maxWidth = this.getMaxWidth();

    return <View style={[styles.container, { maxWidth }, style]} {...rest} />;
  }
}

export default Container;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flex: 1,
    width: "100%",
    marginLeft: "auto",
    marginRight: "auto",
  },
});
