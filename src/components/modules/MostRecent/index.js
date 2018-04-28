// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import ModuleWrap from "./ModuleWrap";
import MainPost from "./MainPost/";
import SecondaryPosts from "./SecondaryPosts";

class MostRecent extends Component<Props> {
  render() {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <ModuleWrap style={styles.wrap}>
        <MainPost post={mainPost} />
        <SecondaryPosts posts={secondaryPosts} style={styles.secondaryPosts} />
      </ModuleWrap>
    );
  }
}

export default MostRecent;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexShrink: 3,
  },
  secondaryPosts: {
    width: 200,
  },
});
