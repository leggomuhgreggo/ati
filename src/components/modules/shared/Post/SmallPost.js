// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostLabel } from "components/modules";
import { Text } from "components/primitives";

type Props = {
  title: string,
  categoryName: string,
  categoryColor: string,
  link: string,
  isDesktop: boolean,
};

class SmallPost extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { title, categoryName, categoryColor, link, isDesktop } = this.props;
    const fontStyles = isDesktop
      ? { fontSize: 17, lineHeight: 24 }
      : { fontSize: 15, lineHeight: 20 };
    return (
      <View style={[styles.postBox]} accessibilityRole="link" href={link}>
        <PostLabel categoryName={categoryName} categoryColor={categoryColor} />
        <View style={{ marginTop: 6 }}>
          <Text aria-level={2} style={[{ fontWeight: "600" }, fontStyles]}>
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
