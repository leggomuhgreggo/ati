// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
};

class LeaderBoard extends Component<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return <View style={[styles.ad, { style }]} />;
  }
}

export default LeaderBoard;

const styles = StyleSheet.create({
  ad: {
    width: 728,
    height: 90,
    backgroundColor: "#ebebeb",
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
