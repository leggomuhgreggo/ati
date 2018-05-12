// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";

type TitleProps = {
  title: string,
};

class PostTitle extends PureComponent<TitleProps> {
  render() {
    const { title, style, textStyles } = this.props;
    return (
      <View style={[styles.titleWrap, style]}>
        <Text sizeRange={[20, 34]} style={[styles.text, textStyles]}>
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
