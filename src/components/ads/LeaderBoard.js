// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
// import { Text } from "components/primitives";

type Props = {
  style?: any,
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
