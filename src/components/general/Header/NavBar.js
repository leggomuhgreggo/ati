import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { HEADER_HEIGHT } from "constants/index.js";

export default class NavBar extends PureComponent {
  render() {
    const { renderRight, renderCenter, renderLeft } = this.props;
    return (
      <View style={[styles.wrap]}>
        <View style={[styles.navGroup, styles.right]}>{renderRight()}</View>

        <View style={[styles.navGroup, styles.center]}>{renderCenter()}</View>

        <View style={[styles.navGroup, styles.left]}>{renderLeft()}</View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: HEADER_HEIGHT,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 15,
    position: "relative",
    zIndex: 1,
  },
  navGroup: {
    justifyContent: "center",
    flexBasis: "33%",
    height: "100%",
  },
  right: { alignItems: "flex-start" },
  center: { alignItems: "center" },
  left: { alignItems: "flex-end" },
});
