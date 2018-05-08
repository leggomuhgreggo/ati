// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import type { Node } from "react";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type TitleProps = {
  children: Node,
  style?: StyleObj,
};

class PostDetails extends Component<TitleProps> {
  static defaultProps = {
    styles: {},
  };

  render() {
    const { children, style } = this.props;
    return (
      <View style={style}>
        <View style={styles.context}>{children}</View>
      </View>
    );
  }
}

export default PostDetails;

const styles = StyleSheet.create({
  context: {
    position: "relative",
  },
});
