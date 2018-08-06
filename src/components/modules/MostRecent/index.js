// @flow

import React, { PureComponent, Fragment } from "react";
import { StyleSheet, View } from "react-native";

import { Container } from "components/primitives";
import { ModuleBox } from "components/modules";
import { Responsive } from "components/utils";

import Post from "./Post";
import MainPost from "./MainPost";

import { BREAKPOINTS, CONTAINER_PADDING } from "constants/index";
class MostRecent extends PureComponent<Props> {
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

  renderMobile = () => {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Fragment>
        <MainPost {...mainPost} />
        <Container
          type="content"
          style={{ marginTop: -5, paddingHorizontal: CONTAINER_PADDING.MOBILE }}
        >
          <ModuleBox patternColor={mainPost.categoryColor}>
            {secondaryPosts.map((post, index) => (
              <View key={post.id} style={index === 0 ? {} : { marginTop: 30 }}>
                <Post {...post} />
              </View>
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
              <MainPost {...mainPost} />
            </View>
            <View style={styles.right}>
              {secondaryPosts.map((post, index) => (
                <View
                  key={post.id}
                  style={index === 0 ? {} : { marginTop: 40 }}
                >
                  <Post {...post} />
                </View>
              ))}
            </View>
          </View>
        </ModuleBox>
      </Container>
    );
  };
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
    justifyContent: "center",
    paddingLeft: 20,
    paddingVertical: 30,
  },
});
