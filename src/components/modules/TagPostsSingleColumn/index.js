// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Container, Row } from "components/primitives";
import { Post, ModuleBox } from "components/modules";
import { Responsive } from "components/utils";
import createLockFunction from "utils/lock";
import { BREAKPOINTS, THEME_SPACING } from "constants.js";

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

  renderMobile = width => {
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

        <Row
          style={{
            marginTop: createLockFunction({
              min: THEME_SPACING.SECTION_SPACING.SM,
              max: THEME_SPACING.SECTION_SPACING.LG,
            })(width),
          }}
        >
          <Post
            layoutVariant="overlay"
            detailsOffset={30}
            containerStyle={{ zIndex: 10 }}
            imageWidth={THEME_SPACING.MOBILE_OVERLAY_IMG_DIMS.WIDTH}
            imageHeight={THEME_SPACING.MOBILE_OVERLAY_IMG_DIMS.HEIGHT}
            {...mainPost}
          />
          <View
            style={{
              paddingHorizontal: THEME_SPACING.MOBILE_CONTAINER_PADDING,
            }}
          >
            <ModuleBox patternColor={sectionColor} offsetDirection="right">
              {posts.map(post => (
                <Post imageWidth={300} imageHeight={250} {...post} />
              ))}
            </ModuleBox>
          </View>
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
        {({ minWidth, width }) => {
          const showMobileLayout = !minWidth(BREAKPOINTS.LG);
          return showMobileLayout
            ? this.renderMobile(width)
            : this.renderDesktop();
        }}
      </Responsive>
    );
  }
}

export default TagPostsSingleColumn;
