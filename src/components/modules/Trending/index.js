// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Container } from "components/primitives";

import Posts from "./Posts";
import TitleSquare from "./TitleSquare";

type Props = {};

class Trending extends PureComponent<Props> {
  render() {
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
            <Posts posts={posts} />
          </View>
        </View>
      </Container>
    );
  }
}

export default Trending;
