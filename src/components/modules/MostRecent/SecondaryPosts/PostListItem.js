// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { PostDetails, PostLabel } from "components/modules";
import PostTitle from "./PostTitle";

type Props = {};

class PostListItem extends Component<ContentItemProps> {
  render() {
    const { category, title } = this.props.post;
    return (
      <View style={styles.postBox}>
        <PostDetails
          style={styles.postDetails}
          category={category}
          title={title}
        >
          <PostLabel spacer={5} category={category} />
          <PostTitle title={title} />
        </PostDetails>
      </View>
    );
  }
}

export default PostListItem;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 25,
  },
});
