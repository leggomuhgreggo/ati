// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle, ModuleBox } from "components/modules";
import { LeaderBoard } from "components/ads";

import { Container, Image } from "components/primitives";

import TitleRow from "./TitleRow";
import MainPost from "./MainPost";
import OverlappingPostsWrap from "./OverlappingPostsWrap";
import PostsOverlapMock from "./PostsOverlapMock";
import Post from "./Post";

class TagPostsSingleColumn extends PureComponent<Props> {
  render() {
    const {
      data: {
        sectionTitle,
        posts: [mainPost, ...posts],
      },
    } = this.props;
    return (
      <View>
        <Container>
          <TitleRow title={sectionTitle} />
        </Container>

        <Container style={{ marginTop: 30 }}>
          <MainPost style={{ zIndex: 10 }} post={mainPost}>
            <PostsOverlapMock />
          </MainPost>

          <OverlappingPostsWrap>
            <Posts posts={posts} />
          </OverlappingPostsWrap>
        </Container>
      </View>
    );
  }
}

export default TagPostsSingleColumn;

class Posts extends PureComponent {
  render() {
    const { children, posts } = this.props;
    return (
      <View
        style={{
          marginTop: -30,
          paddingHorizontal: 45,
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {posts.map(({ id, ...post }) => (
          <PostWrap>
            <Post key={id} post={post} />
          </PostWrap>
        ))}
      </View>
    );
  }
}
const PostWrap = ({ children }) => (
  <View style={{ padding: 10, width: "33%", backgroundColor: "green" }}>
    {children}
  </View>
);
