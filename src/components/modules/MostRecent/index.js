// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { Container } from "components/primitives";
import { Post, ModuleBox, OverlapScaffold } from "components/modules";
import { Responsive } from "components/utils";

import PostList from "./PostList";

import { BREAKPOINTS, CONTAINER_PADDING } from "constants/index";

type Props = { posts: any };

class MostRecent extends PureComponent<Props> {
  renderMobile = () => {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;

    return (
      <OverlapScaffold containerPadding={CONTAINER_PADDING.MOBILE} overlap={3}>
        <OverlapScaffold.Main>
          <Post layoutVariant="overlay" {...mainPost} />
        </OverlapScaffold.Main>

        <OverlapScaffold.Overlap>
          <ModuleBox patternColor={mainPost.categoryColor}>
            <PostList posts={secondaryPosts} isDesktop={false} />
          </ModuleBox>
        </OverlapScaffold.Overlap>
      </OverlapScaffold>
    );
  };

  renderDesktop = () => {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Container type="content">
        <ModuleBox patternColor={mainPost.categoryColor}>
          <View style={styles.wrap}>
            <View style={styles.left}>
              <Post
                layoutVariant="overlay"
                isDesktop={true}
                imageWidth={700}
                imageHeight={545}
                {...mainPost}
              />
            </View>
            <View style={styles.right}>
              <PostList posts={secondaryPosts} isDesktop={true} />
            </View>
          </View>
        </ModuleBox>
      </Container>
    );
  };

  render() {
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          return isDesktop ? this.renderDesktop() : this.renderMobile();
        }}
      </Responsive>
    );
  }
}

export default MostRecent;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
  },
  left: {
    width: "66%",
    justifyContent: "flex-start",
  },
  right: {
    width: "33%",
    justifyContent: "center",
    paddingLeft: 20,
    paddingVertical: 30,
  },
});
