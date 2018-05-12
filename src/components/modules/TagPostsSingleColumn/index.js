// @flow

import React, { PureComponent } from "react";

import { Container, Grid, Row } from "components/primitives";

import TitleRow from "./TitleRow";
import MainPost from "./MainPost";

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
          <MainPost style={{ zIndex: 10 }} post={mainPost}>
            <OverlapSpoof />
          </MainPost>

          <OverlappingPostsWrap patternColor={sectionColor}>
            <Posts posts={posts} />
          </OverlappingPostsWrap>
        </Row>
      </Container>
    );
  }
}

export default TagPostsSingleColumn;
