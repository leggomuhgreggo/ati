// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";

import { HEADER_HEIGHT } from "constants/index.js";

type Props = {};

class Header extends PureComponent<Props> {
  render() {
    return (
      <View style={[styles.headerWrap]}>
        <Text style={[styles.headerText]}>ATI</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    width: "100%",
    height: HEADER_HEIGHT,
    backgroundColor: "black",
    justifyContent: "center",
    alignItems: "center",
  },
  headerText: {
    color: "white",
  },
});
