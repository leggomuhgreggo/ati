// @flow

import React, { Component } from "react";
import { StyleSheet, Platform } from "react-native";

import { Container } from "components/primitives";

import { PostDetails, PostLabel } from "components/modules";

import PostImage from "./PostImage";
import PostTitle from "./PostTitle";
import ContrastOverlay from "./ContrastOverlay";

class MainPost extends Component<Props> {
  render() {
    const {
      post: { imageSrc, title, category },
      style,
      children,
    } = this.props;
    return (
      <Container style={[style]}>
        <PostImage imageSrc={imageSrc} />

        <ContrastOverlay />

        <PostDetails
          style={styles.postDetails}
          category={category}
          title={title}
        >
          <PostLabel
            inline
            fill
            style={{ alignSelf: "center" }}
            category={category}
          />
          <PostTitle style={styles.postTitle} title={title} />
        </PostDetails>
        {children}
      </Container>
    );
  }
}

export default MainPost;

const styles = StyleSheet.create({
  postTitle: {
    ...Platform.select({
      web: {
        textAlign: "center",
      },
    }),
  },
  postDetails: {
    position: "absolute",
    bottom: 30,
    left: 0,
    paddingHorizontal: 45,
    paddingBottom: 50,
  },
});
