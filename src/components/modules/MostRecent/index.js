// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

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
        <ModuleBox>
          <View style={styles.wrap}>
            <View style={styles.left}>
              <MainPost post={mainPost} />
            </View>
            <View style={styles.right}>
              <SecondaryPosts posts={secondaryPosts} />
            </View>
          </View>
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
  left: {
    width: "66%",
  },
  right: {
    width: "33%",
  },
});
