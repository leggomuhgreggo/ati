// @flow

import React, { Component } from "react";
import { ScrollView, StyleSheet, View, Text } from "react-native";

import { COLOR_MAP } from "constants.js";

// import type { Node } from "react";

type Props = {};

class Newsletter extends Component<Props> {
  render() {
    return <View style={styles.wrap} />;
  }
}

export default Newsletter;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLOR_MAP.BLUE,
    width: "100%",
    height: 300,
  },
});
