// @flow

import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import { Text } from "components/primitives";

type TitleProps = {
  title: string,
};

class PostTitle extends PureComponent<TitleProps> {
  render() {
    const { title, style } = this.props;
    return (
      <Text sizeRange={[16, 17]} style={[styles.text, style]}>
        {title}
      </Text>
    );
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
  },
});
