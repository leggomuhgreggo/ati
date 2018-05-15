// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";
import { Container, Row } from "components/primitives";
import { Post } from "components/modules";

import TitleRow from "./TitleRow";
// import MainPost from "./_MainPost";

import { getPostWrapComponents } from "./OverlappingPostsWrap";

import Posts from "./Posts";

const { OverlappingPostsWrap, OverlapSpoof } = getPostWrapComponents({
  offset: 30,
});

class TagPostsSingleColumn extends PureComponent<Props> {
  render() {
    const {
      data: {
        sectionTitle,
        sectionLink,
        sectionColor,
        posts: [mainPost, ...posts],
      },
    } = this.props;
    return (
      <Container type="content">
        <TitleRow
          patternColor={sectionColor}
          link={sectionLink}
          title={sectionTitle}
        />
        <Row style={{ marginTop: 30 }}>
          <View style={{ zIndex: 10 }}>
            <Post layoutVariant="overlay" {...mainPost} />
            <OverlapSpoof />
          </View>

          <OverlappingPostsWrap patternColor={sectionColor}>
            <Posts posts={posts} />
          </OverlappingPostsWrap>
        </Row>
      </Container>
    );
  }
}

export default TagPostsSingleColumn;
