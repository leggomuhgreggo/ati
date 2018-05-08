// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { PostDetails, PostLabel } from "components/modules";
import { Image } from "components/primitives";
import PostTitle from "./PostTitle";

import type { Category } from "components/modules";

type Props = {
  category: Category,
  title: string,
};

class PostListItem extends Component<Props> {
  render() {
    const { category, title, imageSrc } = this.props.post;
    return (
      <View style={styles.postBox}>
        <View>
          <PostImage imageSrc={imageSrc} />
          <PostLabel inline category={category} />
          <PostTitle title={title} />
        </View>
        <Line />
      </View>
    );
  }
}

export default PostListItem;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
    hieght: "100%",
    justifyContent: "space-between",
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

const Line = ({ imageSrc }) => (
  <View
    style={{
      backgroundColor: "black",
      height: 3,
      width: "100%",
    }}
  />
);
