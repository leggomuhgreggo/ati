// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CategoryLabel from "./CategoryLabel";
import PostTitle from "./PostTitle";

import { LABEL_HEIGHT } from "./constants";

type ContentListProps = {};
class ContentList extends Component<ContentListProps> {
  render() {
    const { posts, style } = this.props;
    return (
      <View style={[styles.listBox, style]}>
        {posts.map(({ id, ...post }) => <ContentItem key={id} post={post} />)}
      </View>
    );
  }
}

type ContentItemProps = {};
class ContentItem extends Component<ContentItemProps> {
  render() {
    const { category, title } = this.props.post;
    return (
      <View style={styles.postBox}>
        <View style={styles.postTitleWrap}>
          <CategoryLabel style={styles.labelPosition} category={category} />
          <PostTitle title={title} />
        </View>
      </View>
    );
  }
}

export default ContentList;

const styles = StyleSheet.create({
  listBox: {
    paddingVertical: 40,
  },

  postTitleWrap: {
    position: "relative",
  },

  labelPosition: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [
      {
        translateY: -LABEL_HEIGHT,
      },
    ],
  },
  postBox: {
    width: "100%",
    height: "25%",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
});
