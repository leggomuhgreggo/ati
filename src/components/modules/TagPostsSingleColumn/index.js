// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle, ModuleBox } from "components/modules";
import { LeaderBoard } from "components/ads";

import { Container, Image } from "components/primitives";

import TitleRow from "./TitleRow";
import MainPost from "./MainPost";
import OverlappingPostsWrap from "./OverlappingPostsWrap";

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
            <OverlapMock />
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
    const { children } = this.props;
    return (
      <View
        style={{
          marginTop: -30,
          paddingHorizontal: 45,
        }}
      >
        {children}
      </View>
    );
  }
}

const OverlapMock = () => (
  <View
    style={{
      // marginTop: -30,
      paddingHorizontal: 45,
      position: "absolute",
      width: "100%",
      bottom: 0,
      zIndex: 5,
    }}
  >
    <View
      style={{
        height: 30,
        backgroundColor: "white",
      }}
    />
  </View>
);
