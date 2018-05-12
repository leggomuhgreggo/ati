// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";

const ALIGN = {
  CENTER: "center",
  RIGHT: "right",
  LEFT: "left",
};

type AlignType = $values<ALIGN>;

type Props = {
  title: string,
  textAlign: AlignType,
};

class PostTitle extends PureComponent<Props> {
  static defaultProps = {
    textAlign: "left",
  };

  render() {
    const { title, textStyles, textAlign } = this.props;
    const alignStyles = getWrapAlignStyles(textAlign);
    return (
      <View style={[styles.titleWrap, alignStyles]}>
        <Text sizeRange={[20, 34]} style={[styles.titleText, { textAlign }]}>
          {title}
        </Text>
      </View>
    );
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  titleText: {
    color: "white",
  },
  titleWrap: {
    position: "relative",
    width: "100%",
  },
});

const ALIGN_MAP = {
  center: "center",
  left: "flex-start",
  right: "flex-start",
};

const getWrapAlignStyles = (textAlign: AlignType) => ({
  alignItems: ALIGN_MAP[textAlign],
});
