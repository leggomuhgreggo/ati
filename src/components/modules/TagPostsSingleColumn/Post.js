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
};

class Post extends PureComponent<Props> {
  static defaultProps = {
    postType: "med",
    overlayDetails: false,
  };

  render() {
    const { categoryColor, category, title, imageSrc, width } = this.props;
    return (
      <View style={[styles.postBox]}>
        <View>
          <PostImage imageSrc={imageSrc} />

          <View>
            <PostLabel
              style={styles.postLabel}
              color={categoryColor}
              inline
              category={category}
            />
            <PostTitle style={styles.postTitle} title={title} />
          </View>
        </View>
        <Line />
      </View>
    );
  }
}

export default Post;

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
