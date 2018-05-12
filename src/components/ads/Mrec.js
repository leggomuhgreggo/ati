// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
};

class Mrec extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return <View style={[styles.ad, { style }]} />;
  }
}

export default Mrec;

const styles = StyleSheet.create({
  ad: {
    width: 300,
    height: 250,
    backgroundColor: "#ebebeb",
    borderColor: "#cccccc",
    borderWidth: 1,
  },
});
