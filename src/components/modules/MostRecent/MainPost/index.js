// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Container } from "components/primitives";

import PostDetails from "./PostDetails";
import PostImage from "./PostImage";
import ContrastOverlay from "./ContrastOverlay";

class MainPost extends Component<Props> {
  render() {
    const { imageSrc, title, category, style } = this.props.post;
    return (
      <Container style={[style]}>
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
