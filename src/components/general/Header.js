// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";

const HEADER_HEIGHT = 60;

type Props = {
  style?: any,
};

class Header extends Component<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { style } = this.props;
    return (
      <View style={[styles.headerWrap, { style }]}>
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
