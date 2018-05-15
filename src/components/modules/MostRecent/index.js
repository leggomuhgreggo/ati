// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { ModuleBox, Post } from "components/modules";
import { Container } from "components/primitives";

class MostRecent extends PureComponent<Props> {
  render() {
    const {
      posts: [mainPost, ...secondaryPosts],
    } = this.props;
    return (
      <Container>
        <ModuleBox patternColor={mainPost.categoryColor}>
          <View style={styles.wrap}>
            <View style={styles.left}>
              <Post layoutVariant="overlay" {...mainPost} />
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
