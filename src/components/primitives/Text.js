// @flow

import React, { Component } from "react";
import { Text as RNText, StyleSheet } from "react-native";

type Props = {
  style?: any,
  rest?: any,
};

class Text extends Component<Props> {
  static defaultProps = {
    style: {},
    rest: {},
  };

  render() {
    const { style, ...rest } = this.props;
    return <RNText style={[styles.text, style]} {...rest} />;
  }
}

export default Text;

const styles = StyleSheet.create({
  text: {
    color: "black",
  },
});
