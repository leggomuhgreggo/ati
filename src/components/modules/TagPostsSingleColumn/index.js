// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Container, Row } from "components/primitives";
import { MainPost, Post, ModuleBox, OverlapScaffold } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS, CONTAINER_PADDING } from "constants/index";

import TitleRow from "./TitleRow";
import Posts from "./Posts";

type Props = {
  order: number,
  sectionTitle: string,
  sectionLink: string,
  sectionColor: string,
  titleTemplate: string,
  posts: any,
};

class TagPostsSingleColumn extends PureComponent<Props> {
  static defaultProps = {
    order: 1,
  };

  render() {
    const {
      sectionTitle,
      sectionLink,
      sectionColor,
      titleTemplate,
      order,
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);

          const scaffoldProps = isDesktop
            ? {
                containerPadding: 45,
                overlap: 30,
              }
            : {
                containerPadding: CONTAINER_PADDING.MOBILE,
                overlap: 3,
              };

          const ResponsivePosts = () =>
            isDesktop ? (
              <Posts order={order} posts={secondaryPosts} />
            ) : (
              secondaryPosts.map((post, index) => (
                <View
                  key={post.id}
                  style={index === 0 ? {} : { marginTop: 40 }}
                >
                  <Post {...post} />
                </View>
              ))
            );

          return (
            <Container type="content">
              <TitleRow
                patternColor={sectionColor}
                link={sectionLink}
                title={sectionTitle}
                titleTemplate={titleTemplate}
                isDesktop={isDesktop}
              />

              <Row style={{ marginTop: 60 }}>
                <OverlapScaffold {...scaffoldProps}>
                  <OverlapScaffold.Main>
                    <MainPost
                      imageWidth={1009}
                      imageHeight={545}
                      center
                      {...mainPost}
                    />
                  </OverlapScaffold.Main>

                  <OverlapScaffold.Overlap>
                    <ModuleBox
                      offsetDirection="right"
                      patternColor={sectionColor}
                    >
                      <ResponsivePosts />
                    </ModuleBox>
                  </OverlapScaffold.Overlap>
                </OverlapScaffold>
              </Row>
            </Container>
          );
        }}
      </Responsive>
    );
  }
}

export default TagPostsSingleColumn;
