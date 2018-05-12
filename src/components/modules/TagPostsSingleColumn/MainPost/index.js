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
    const {
      post: { imageSrc, title, category, categoryColor, categoryLink },
      style,
      children,
    } = this.props;
    return (
      <Container style={[style]}>
        <PostImage imageSrc={imageSrc} />

        <ContrastOverlay />

        <PostDetails style={styles.postDetails} title={title}>
          <PostLabel
            inline
            fill
            style={styles.postLabel}
            color={categoryColor}
            category={category}
          />
          <PostTitle
            textAlign="center"
            textStyles={styles.postTitle}
            title={title}
          />
        </PostDetails>
        {children}
      </Container>
    );
  }
}

export default MainPost;

const styles = StyleSheet.create({
  postTitle: {
    textAlign: "center",
  },
  postLabel: {
    alignSelf: "center",
  },
  postDetails: {
    position: "absolute",
    bottom: 30,
    left: 0,
    paddingHorizontal: 45,
    paddingBottom: 50,
  },
});
