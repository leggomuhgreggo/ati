// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Text } from "../../../primitives";

type TitleProps = {
  title: string,
};

class PostTitle extends Component<TitleProps> {
  render() {
    const { title } = this.props;
    return <Text style={styles.text}>{title}</Text>;
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  text: {
    // color: "white",
  },
});
