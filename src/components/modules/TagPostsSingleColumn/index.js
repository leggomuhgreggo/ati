// @flow

import React, { PureComponent } from "react";

import { Container, Row } from "components/primitives";
import { Post } from "components/modules";

import TitleRow from "./TitleRow";

import { getPostWrapComponents } from "./MakeOverlappingComponents";

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
          <Post
            layoutVariant="overlay"
            detailsOffset={30}
            containerStyle={{ zIndex: 10 }}
            {...mainPost}
          >
            <OverlapSpoof />
          </Post>

          <OverlappingPostsWrap patternColor={sectionColor}>
            <Posts posts={posts} />
          </OverlappingPostsWrap>
        </Row>
      </Container>
    );
  }
}

export default TagPostsSingleColumn;
