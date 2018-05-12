// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import InnerContainer from "./InnerContainer";

class PostsOverlapMock extends PureComponent {
  render() {
    return (
      <InnerContainer style={styles.container}>
        <View style={styles.container} />
      </InnerContainer>
    );
  }
}

export default PostsOverlapMock;

const styles = StyleSheet.create({
  container: {
    position: "absolute",
    bottom: 0,
  },
  fill: {
    height: 30,
    backgroundColor: "white",
  },
});
