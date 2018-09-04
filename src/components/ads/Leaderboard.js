// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { RNW$Styles } from "react-native";

type Props = {
  style?: RNW$Styles,
};

class Leaderboard extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return <View style={[styles.ad, style]} />;
  }
}

export default Leaderboard;

const styles = StyleSheet.create({
  ad: {
    width: 728,
    height: 90,
    backgroundColor: "#ebebeb",
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
