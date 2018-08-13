// @flow

import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";

import { Text } from "components/primitives";
import { Responsive } from "components/utils";
import { BREAKPOINTS } from "constants/index.js";

type TitleProps = {
  title: string,
};

class PostTitle extends PureComponent<TitleProps> {
  render() {
    const { title, style } = this.props;
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const fontStyles = isDesktop
            ? {
                fontSize: 18,
                lineHeight: 23,
              }
            : {
                fontSize: 15,
                lineHeight: 20,
              };
          return (
            <Text aria-level={2} style={[styles.text, fontStyles, style]}>
              {title}
            </Text>
          );
        }}
      </Responsive>
    );
  }
}

export default PostTitle;

const styles = StyleSheet.create({
  text: {
    fontWeight: "600",
  },
});
