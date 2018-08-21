// @flow

import React, { PureComponent } from "react";
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
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <OverlapScaffold containerPadding={CONTAINER_PADDING.MOBILE} overlap={3}>
        <OverlapScaffold.Main>
          <MainPost imageWidth={1009} imageHeight={545} center {...mainPost} />
        </OverlapScaffold.Main>

        <OverlapScaffold.Overlap>
          <ModuleBox
            offsetDirection="right"
            patternColor={mainPost.categoryColor}
          >
            {secondaryPosts.map((post, index) => (
              <View key={post.id} style={index === 0 ? {} : { marginTop: 40 }}>
                <Post {...post} />
              </View>
            ))}
          </ModuleBox>
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
      <OverlapScaffold containerPadding={45} overlap={30}>
        <OverlapScaffold.Main>
          <MainPost center {...mainPost} />
        </OverlapScaffold.Main>

        <OverlapScaffold.Overlap>
          <ModuleBox offsetDirection="right" patternColor={sectionColor}>
            <Posts order={order} posts={secondaryPosts} />
          </ModuleBox>
        </OverlapScaffold.Overlap>
      </OverlapScaffold>
    );
  };

  render() {
    const { sectionTitle, sectionLink, sectionColor } = this.props;
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
