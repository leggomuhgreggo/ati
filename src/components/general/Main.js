// @flow

import React, { PureComponent } from "react";
import { ScrollView, StyleSheet } from "react-native";

import type { Node } from "react";

import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  children: Node,
  contentContainerStyle?: StyleObj,
  style?: StyleObj,
};

type State = {
  contentHeight: number,
};

class Main extends PureComponent<Props, State> {
  static defaultProps = {
    contentContainerStyle: {},
    style: {},
  };

  render() {
    const { children, contentContainerStyle, style } = this.props;
    return (
      <ScrollView
        keyboardShouldPersistTaps="handled"
        style={[styles.scrollView, style]}
        contentContainerStyle={[styles.contentContainer, contentContainerStyle]}
      >
        {children}
      </ScrollView>
    );
  }
}

export default Main;

const styles = StyleSheet.create({
  scrollView: {
    flex: 1,
    width: "100%",
  },
  contentContainer: {
    flexGrow: 1,
    width: "100%",
    alignItems: "center",
  },
});
