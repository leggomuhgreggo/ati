// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Container } from "components/primitives";

import { PostDetails, PostLabel } from "components/modules";

import PostImage from "./PostImage";
import PostTitle from "./PostTitle";
import ContrastOverlay from "./ContrastOverlay";

class MainPost extends Component<Props> {
  render() {
    const { imageSrc, title, category, style } = this.props.post;
    return (
      <Container style={[style]}>
        <PostImage imageSrc={imageSrc} />

        <ContrastOverlay />

        <PostDetails
          style={styles.postDetails}
          category={category}
          title={title}
        >
          <PostLabel fill category={category} />
          <PostTitle title={title} />
        </PostDetails>
      </Container>
    );
  }
}

export default MainPost;

const styles = StyleSheet.create({
  postDetails: {
    position: "absolute",
    bottom: 0,
    left: 0,
    padding: 15,
  },
});
