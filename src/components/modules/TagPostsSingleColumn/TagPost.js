// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostDetails, PostLabel } from "components/modules";
import { Image } from "components/primitives";
import PostTitle from "./PostTitle";

import type { Category } from "components/modules";

type Props = {
  category: Category,
  title: string,
  imageSrc: string,
  postType?: "sm" | "med" | "lg",
  overlayDetails?: boolean,
  categoryColor: string,
  style?: any,
};

class TagPost extends PureComponent<Props> {
  static defaultProps = {
    postType: "med",
    overlayDetails: false,
    style: {},
  };

  render() {
    const { style, categoryColor, category, title, imageSrc } = this.props;
    return (
      <View style={[styles.postBox, style]}>
        <View>
          <PostImage imageSrc={imageSrc} />

          <PostDetails>
            <PostLabel
              style={styles.postLabel}
              color={categoryColor}
              inline
              category={category}
            />
            <PostTitle style={styles.postTitle} title={title} />
          </PostDetails>
        </View>
        <Line />
      </View>
    );
  }
}

export default TagPost;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  postLabel: {
    marginTop: 20,
  },
  postTitle: {
    marginTop: 10,
  },
  postLine: {
    marginTop: 30,
    backgroundColor: "black",
    height: 3,
    width: "100%",
  },
});

const PostImage = ({ imageSrc }) => (
  <Image
    source={{
      uri: imageSrc,
      width: 2218,
      height: 1090,
    }}
  />
);

const Line = ({ imageSrc }) => <View style={styles.postLine} />;
