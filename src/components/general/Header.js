// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";

import type { RNW$Styles } from "react-native";

const HEADER_HEIGHT = 50;

type Props = {
  style?: RNW$Styles,
};

class Header extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.headerWrap, style]}>
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
