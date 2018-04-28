// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { View } from "../../../primitives";
import { CATEGORY_COLOR_MAP } from "../../../../constants";

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
        <Text>ATI</Text>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    width: "100%"
    height: HEADER_HEIGHT,
    backgroundColor: "black",
  },
});
