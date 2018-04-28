// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Container } from "../../../primitives";

import PostDetails from "./PostDetails";
import PostImage from "./PostImage";
import ContrastOverlay from "./ContrastOverlay";

class MainPost extends Component<Props> {
  render() {
    const { imageSrc, title, category } = this.props.post;
    return (
      <Container>
        <PostImage imageSrc={imageSrc} />
        <ContrastOverlay />
        <View style={styles.postDetailsPosition}>
          <PostDetails category={category} title={title} />
        </View>
      </Container>
    );
  }
}

export default MainPost;

const styles = StyleSheet.create({
  postDetailsPosition: {
    position: "absolute",
    bottom: 0,
    left: 0,
  },
});
