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
  imageSrc: string,
  postType?: "sm" | "med" | "lg",
  overlayDetails?: boolean,
};

class PostListItem extends Component<Props> {
  static defaultProps = {
    postType: "med",
    overlayDetails: false,
  };

  render() {
    const { category, title, imageSrc, width } = this.props;
    return (
      <View style={[styles.postBox]}>
        <View>
          <PostImage imageSrc={imageSrc} />

          <View>
            <PostLabel inline category={category} />
            <PostTitle title={title} />
          </View>
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
