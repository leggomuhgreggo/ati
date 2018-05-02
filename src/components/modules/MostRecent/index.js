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
        <MainPost post={mainPost} style={styles.mainPost} />
        <SecondaryPosts posts={secondaryPosts} style={styles.secondaryPosts} />
      </ModuleWrap>
    );
  }
}

export default MostRecent;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
  },
  mainPost: {
    width: "66%",
  },
  secondaryPosts: {
    width: "33%",
  },
});
