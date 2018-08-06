// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostLabel } from "components/modules";
import { Text } from "components/primitives";
import { Responsive } from "components/utils";
import { BREAKPOINTS, CONTAINER_PADDING, IMG_DIMS } from "constants/index";

import type { Category } from "components/modules";

class Post extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  static Details = ({ children }) => children;

  render() {
    const { title, categoryName, categoryColor, link } = this.props;
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const fontStyles = isDesktop
            ? { fontSize: 17, lineHeight: 24 }
            : { fontSize: 15, lineHeight: 20 };

          return (
            <View style={[styles.postBox]} accessibilityRole="link" href={link}>
              <PostLabel
                categoryName={categoryName}
                categoryColor={categoryColor}
              />
              <View style={{ marginTop: isDesktop ? 10 : 5 }}>
                <Text style={fontStyles}>{title}</Text>
              </View>
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
  },
});
