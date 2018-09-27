// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostImage } from "components/modules";
import SmallPost from "./SmallPost";
import type SmallPostProps from "./SmallPost";

type Props = {
  link: string,
  imageSrc: string,
  imageWidth: number,
  imageHeight: number,
} & SmallPostProps;

class MediumPost extends PureComponent<Props> {
  static defaultProps = {
    style: {},
    imageWidth: 300,
    imageHeight: 250,
  };

  render() {
    const { imageSrc, imageHeight, imageWidth, link, ...rest } = this.props;
    const linkProps = link ? { accessibilityRole: "link", href: link } : {};
    return (
      <View {...linkProps} style={{ flex: 1 }}>
        <PostImage
          width={imageWidth}
          height={imageHeight}
          imageSrc={imageSrc}
        />
        <View
          style={{
            marginTop: 15,
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <SmallPost {...rest} />
          <View style={styles.postLine} />
        </View>
      </View>
    );
  }
}

export default MediumPost;

const styles = StyleSheet.create({
  postLine: {
    marginTop: 18,
    backgroundColor: "black",
    height: 2,
    width: "100%",
  },
});
