// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import CategoryLabel from "./CategoryLabel";
import PostTitle from "./PostTitle";

type ContentListProps = {};
class ContentList extends Component<ContentListProps> {
  render() {
    const { posts, style } = this.props;
    return (
      <View style={style}>
        {posts.map(({ id, ...post }) => <ContentItem key={id} post={post} />)}
      </View>
    );
  }
}

type ContentItemProps = {};
class ContentItem extends Component<ContentItemProps> {
  render() {
    const { imageSrc, category, title } = this.props.post;
    return (
      <View style={styles.postBox}>
        <CategoryLabel category={category} />
        <PostTitle title={title} />
      </View>
    );
  }
}

export default ContentList;

const styles = StyleSheet.create({
  listBox: {
    // flexDirection: "column",
  },

  postBox: {
    width: "100%",
    height: "25%",
    flex: 1,
    justifyContent: "center",
    padding: 20,
  },
});
