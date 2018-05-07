// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleBox } from "components/modules";

class OverlappingPostsWrap extends PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <View style={[styles.wrap, style]}>
        <ModuleBox offsetDirection="right" color="brown">
          {children}
        </ModuleBox>
      </View>
    );
  }
}

export default OverlappingPostsWrap;

const styles = StyleSheet.create({
  wrap: {
    marginTop: -30,
    paddingHorizontal: 45,
  },
});
