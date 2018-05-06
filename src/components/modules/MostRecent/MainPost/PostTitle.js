// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "./../../../primitives";

type TitleProps = {
  title: string,
};

class PostTitle extends Component<TitleProps> {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.titleWrap}>
        <Text sizeRange={[20, 34]} style={styles.text}>
          {title}
        </Text>
      </View>
    );
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  text: {
    color: "white",
  },
  titleWrap: {
    position: "relative",
  },
});
