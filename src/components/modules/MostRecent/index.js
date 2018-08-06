// @flow

import React, { PureComponent, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { ModuleBox, Post } from "components/modules";
import { Container } from "components/primitives";
import { Responsive } from "components/utils";

import { BREAKPOINTS, THEME_SPACING } from "constants/index";

class MostRecent extends PureComponent<Props> {
  renderMobile = () => {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Fragment>
        <Post
          {...mainPost}
          imageWidth={THEME_SPACING.MOBILE_OVERLAY_IMG_DIMS.WIDTH}
          imageHeight={THEME_SPACING.MOBILE_OVERLAY_IMG_DIMS.HEIGHT}
          layoutVariant="overlay"
        />
        <Container
          type="content"
          style={{ paddingHorizontal: THEME_SPACING.MOBILE_CONTAINER_PADDING }}
        >
          <ModuleBox patternColor={mainPost.categoryColor}>
            {secondaryPosts.map(post => (
              <Post layoutVariant="reduced" key={post.id} {...post} />
            ))}
          </ModuleBox>
        </Container>
      </Fragment>
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
                imageWidth={1397}
                imageHeight={1091}
                layoutVariant="overlay"
                {...mainPost}
              />
            </View>
            <View style={styles.right}>
              {secondaryPosts.map(post => (
                <Post layoutVariant="reduced" key={post.id} {...post} />
              ))}
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
  },
  right: {
    width: "33%",
    paddingLeft: 15,
  },
});
