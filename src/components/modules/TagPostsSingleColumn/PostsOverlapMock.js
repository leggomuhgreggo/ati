// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class PostsOverlapMock extends PureComponent {
  render() {
    return (
      <View
        style={{
          paddingHorizontal: 45,
          position: "absolute",
          width: "100%",
          bottom: 0,
        }}
      >
        <View
          style={{
            height: 30,
            backgroundColor: "white",
          }}
        />
      </View>
    );
  }
}

export default PostsOverlapMock;
