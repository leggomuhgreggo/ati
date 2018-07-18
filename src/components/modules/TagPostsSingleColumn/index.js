// @flow

import React, { PureComponent } from "react";

import { Container, Row } from "components/primitives";
import { Post } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS } from "constants.js";

import TitleRow from "./TitleRow";

import { getPostWrapComponents } from "./MakeOverlappingComponents";

import Posts from "./Posts";

const { OverlappingPostsWrap, OverlapSpoof } = getPostWrapComponents({
  offset: 30,
});

type Props = {
  order: number,
};

class TagPostsSingleColumn extends PureComponent<Props> {
  static defaultProps = {
    order: 1,
  };

  renderMobile = () => {
    const {
      order,
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
        <Row style={{ marginTop: 60 }}>
          <Post
            layoutVariant="overlay"
            detailsOffset={30}
            containerStyle={{ zIndex: 10 }}
            {...mainPost}
          >
            <OverlapSpoof />
          </Post>

          <OverlappingPostsWrap patternColor={sectionColor}>
            <Posts order={order} posts={posts} />
          </OverlappingPostsWrap>
        </Row>
      </Container>
    );
  };
  renderDesktop = () => {
    const {
      order,
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
        <Row style={{ marginTop: 60 }}>
          <Post
            layoutVariant="overlay"
            detailsOffset={30}
            containerStyle={{ zIndex: 10 }}
            {...mainPost}
          >
            <OverlapSpoof />
          </Post>

          <OverlappingPostsWrap patternColor={sectionColor}>
            <Posts order={order} posts={posts} />
          </OverlappingPostsWrap>
        </Row>
      </Container>
    );
  };

  render() {
    return (
      <Responsive>
        {({ minWidth }) => {
          const showMobileLayout = !minWidth(BREAKPOINTS.LG);
          return showMobileLayout ? this.renderMobile() : this.renderDesktop();
        }}
      </Responsive>
    );
  }
}

export default TagPostsSingleColumn;
