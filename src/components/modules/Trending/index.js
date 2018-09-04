// @flow

import React, { PureComponent, Fragment } from "react";
import { View } from "react-native";

import { Container } from "components/primitives";
import { ModuleBox } from "components/modules";

import PostList from "./PostList";
import PostGrid from "./PostGrid";

import TitleSquare from "./TitleSquare";

import { Responsive } from "components/utils";

import { BREAKPOINTS } from "constants/index";

type Props = { posts: any, sectionColor: string };

class Trending extends PureComponent<Props> {
  renderMobile = () => {
    const { posts, sectionColor } = this.props;
    return (
      <Container type="content" style={{ padding: 15 }}>
        <View style={{ paddingHorizontal: 40 }}>
          <TitleSquare title="Trending" patternColor={sectionColor} />
        </View>
        <View style={{ marginTop: 30 }}>
          <ModuleBox>
            <PostList posts={posts} isDesktop={false} />
          </ModuleBox>
        </View>
      </Container>
    );
  };
  renderDesktop = () => {
    const { posts, sectionColor } = this.props;
    return (
      <Container type="content">
        <View
          style={{
            flexDirection: "row",
            margin: -15,
          }}
        >
          <View style={{ width: "25%", padding: 15 }}>
            <TitleSquare title="Trending" patternColor={sectionColor} />
          </View>

          <View style={{ width: "75%", padding: 15 }}>
            <PostGrid posts={posts} />
          </View>
        </View>
      </Container>
    );
  };
  render() {
    const { posts, sectionColor } = this.props;
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

export default Trending;
