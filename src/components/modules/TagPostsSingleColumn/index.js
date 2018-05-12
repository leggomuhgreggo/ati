// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Container, Grid } from "components/primitives";

import TitleRow from "./TitleRow";
import MainPost from "./MainPost";
import OverlappingPostsWrap from "./OverlappingPostsWrap";
import PostsOverlapMock from "./PostsOverlapMock";
import Post from "./Post";
import InnerContainer from "./InnerContainer";

class TagPostsSingleColumn extends PureComponent<Props> {
  render() {
    const {
      data: {
        sectionTitle,
        sectionLink,
        sectionColor,
        posts: [mainPost, ...posts],
      },
    } = this.props;
    return (
      <Container type="content">
        <View>
          <TitleRow
            color={sectionColor}
            link={sectionLink}
            title={sectionTitle}
          />
        </View>

        <View style={{ marginTop: 30 }}>
          <MainPost style={{ zIndex: 10 }} post={mainPost}>
            <PostsOverlapMock />
          </MainPost>

          <InnerContainer>
            <Posts posts={posts} />
          </InnerContainer>
        </View>
      </Container>
    );
  }
}

export default TagPostsSingleColumn;

class Posts extends PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <Grid
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
        }}
      >
        {posts.map(post => <Post key={post.id} {...post} />)}
      </Grid>
    );
  }
}
