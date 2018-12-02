// @flow

import React, { PureComponent } from "react";

import { Container, Row } from "components/primitives";
import { Post, ModuleBox, OverlapScaffold } from "components/modules";
import { Responsive } from "components/utils";
import { BREAKPOINTS, CONTAINER_PADDING } from "constants/index";

import TitleRow from "./TitleRow";
import PostList from "./PostList";
import PostGrid from "./PostGrid";

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
  scaffoldProps = (isDesktop: boolean) =>
    isDesktop
      ? {
          containerPadding: 45,
          overlap: 30,
        }
      : {
          containerPadding: CONTAINER_PADDING.MOBILE,
          overlap: 15,
        };

  MainPostImageProps = (isDesktop: boolean) =>
    isDesktop
      ? {
          imageWidth: 1200,
          imageHeight: 627,
        }
      : {
          imageWidth: 375,
          imageHeight: 250,
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

          return (
            <Container type="content">
              <TitleRow
                patternColor={sectionColor}
                link={sectionLink}
                title={sectionTitle}
                titleTemplate={titleTemplate}
                isDesktop={isDesktop}
              />

              <Row style={{ marginTop: isDesktop ? 60 : 30 }}>
                <OverlapScaffold {...this.scaffoldProps(isDesktop)}>
                  <OverlapScaffold.Main>
                    <Post
                      layoutVariant="overlay"
                      isDesktop={isDesktop}
                      center
                      {...this.MainPostImageProps(isDesktop)}
                      {...mainPost}
                    />
                  </OverlapScaffold.Main>

                  <OverlapScaffold.Overlap>
                    <ModuleBox
                      offsetDirection="right"
                      patternColor={sectionColor}
                    >
                      {isDesktop ? (
                        <PostGrid order={order} posts={secondaryPosts} />
                      ) : (
                        <PostList posts={secondaryPosts} />
                      )}
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
