// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostLabel } from "components/modules";
import { Text } from "components/primitives";

export type SmallPostProps = {
  title: string,
  categoryName: string,
  categoryColor: string,
  numberOfLines?: number,
  link?: string,
  isDesktop?: boolean,
};

class SmallPost extends PureComponent<SmallPostProps> {
  static defaultProps = {
    style: {},
  };

  render() {
    const {
      numberOfLines,
      title,
      categoryName,
      categoryColor,
      link,
      isDesktop,
    } = this.props;

    const fontStyles = isDesktop
      ? { fontSize: 17, lineHeight: 24 }
      : { fontSize: 15, lineHeight: 20 };

    const linkProps = link ? { accessibilityRole: "link", href: link } : {};

    return (
      <View style={[styles.postBox]} {...linkProps}>
        <PostLabel categoryName={categoryName} categoryColor={categoryColor} />
        <View style={{ marginTop: 6 }}>
          <Text
            numberOfLines={numberOfLines}
            aria-level={2}
            style={[{ fontWeight: "600" }, fontStyles]}
          >
            {title}
          </Text>
        </View>
      </View>
    );
  }
}

export default SmallPost;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
  },
});
