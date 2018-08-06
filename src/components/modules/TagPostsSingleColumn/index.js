// @flow

import React, { PureComponent, Fragment } from "react";
import { View } from "react-native";

import { Container, Row } from "components/primitives";
import { MainPost, Post, ModuleBox, OverlapScaffold } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS, THEME_SPACING, CONTAINER_PADDING } from "constants/index";

import TitleRow from "./TitleRow";

import Posts from "./Posts";

type Props = {
  order: number,
};

class TagPostsSingleColumn extends PureComponent<Props> {
  static defaultProps = {
    order: 1,
  };

  renderMobile = width => {
    const {
      sectionColor,
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <OverlapScaffold overlap={3}>
        <OverlapScaffold.Main>
          <MainPost imageWidth={1009} imageHeight={545} center {...mainPost} />
        </OverlapScaffold.Main>

        <OverlapScaffold.Overlap>
          <Container
            type="content"
            style={{ paddingHorizontal: CONTAINER_PADDING.MOBILE }}
          >
            <ModuleBox
              offsetDirection="right"
              patternColor={mainPost.categoryColor}
            >
              {secondaryPosts.map((post, index) => (
                <View
                  key={post.id}
                  style={index === 0 ? {} : { marginTop: 40 }}
                >
                  <Post {...post} />
                </View>
              ))}
            </ModuleBox>
          </Container>
        </OverlapScaffold.Overlap>
      </OverlapScaffold>
    );
  };
  renderDesktop = () => {
    const {
      order,
      sectionColor,
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <OverlapScaffold overlap={30}>
        <OverlapScaffold.Main>
          <MainPost center {...mainPost} />
        </OverlapScaffold.Main>

        <OverlapScaffold.Overlap>
          <Container type="content" style={{ paddingHorizontal: 45 }}>
            <ModuleBox offsetDirection="right" patternColor={sectionColor}>
              <Posts order={order} posts={secondaryPosts} />
            </ModuleBox>
          </Container>
        </OverlapScaffold.Overlap>
      </OverlapScaffold>
    );
  };

  render() {
    const {
      typeVariant: order,
      sectionTitle,
      sectionLink,
      sectionColor,
      posts: [mainPost, ...posts],
    } = this.props;
    return (
      <Responsive>
        {({ minWidth, width, getLock }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const rowMargin = isDesktop
            ? getLock({
                min: THEME_SPACING.SECTION_SPACING.SM,
                max: THEME_SPACING.SECTION_SPACING.LG,
              })
            : 60;

          return (
            <Container type="content">
              <TitleRow
                patternColor={sectionColor}
                link={sectionLink}
                title={sectionTitle}
              />

              <Row style={{ marginTop: rowMargin }}>
                {isDesktop ? this.renderDesktop() : this.renderMobile()}
              </Row>
            </Container>
          );
        }}
      </Responsive>
    );
  }
}

export default TagPostsSingleColumn;
