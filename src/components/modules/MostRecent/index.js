// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { ModuleBox } from "components/modules";
import { Container } from "components/primitives";

import MainPost from "./MainPost/";
import SecondaryPosts from "./SecondaryPosts";

class MostRecent extends Component<Props> {
  render() {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Container>
        <ModuleBox style={styles.wrap}>
          <MainPost post={mainPost} style={styles.mainPost} />
          <SecondaryPosts
            posts={secondaryPosts}
            style={styles.secondaryPosts}
          />
        </ModuleBox>
      </Container>
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
