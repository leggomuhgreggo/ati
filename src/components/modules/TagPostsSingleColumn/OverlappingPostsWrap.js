// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleBox } from "components/modules";

export class OverlappingPostsWrap extends PureComponent {
  render() {
    const { children, style, patternColor, offSet = 30 } = this.props;
    return (
      <PostContainer style={{ marginTop: -offSet }}>
        <ModuleBox offsetDirection="right" patternColor={patternColor}>
          {children}
        </ModuleBox>
      </PostContainer>
    );
  }
}

export class OverlapSpoof extends PureComponent {
  render() {
    const { height = 30 } = this.props;
    return (
      <PostContainer style={[styles.wrap]}>
        <View style={[styles.fill, { height }]} />
      </PostContainer>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    bottom: 0,
  },
  container: {
    paddingHorizontal: 45,
    width: "100%",
  },
  fill: {
    backgroundColor: "white",
  },
});

class PostContainer extends PureComponent {
  render() {
    const { style, children } = this.props;
    return <View style={[styles.container, style]}>{children}</View>;
  }
}

export const getPostWrapComponents = ({ offset = 30 }) => ({
  OverlappingPostsWrap: ({ children, ...rest }) => (
    <OverlappingPostsWrap offset={offset} {...rest}>
      {children}
    </OverlappingPostsWrap>
  ),
  OverlapSpoof: ({ children, ...rest }) => (
    <OverlapSpoof height={offset} {...rest}>
      {children}
    </OverlapSpoof>
  ),
});
