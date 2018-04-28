// @flow

import React, { Component } from "react";
import { View, StyleSheet, Text } from "react-native";

type TitleProps = {
  title: string,
};

class PostTitle extends Component<TitleProps> {
  render() {
    const { title } = this.props;
    return (
      <View style={styles.titleWrap}>
        <Text style={styles.text}>{title}</Text>
      </View>
    );
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    color: "white",
  },
  titleWrap: {
    position: "relative",
  },
});
