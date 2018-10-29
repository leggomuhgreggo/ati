import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { HEADER_HEIGHT } from "constants/index.js";

export default class NavBar extends PureComponent {
  render() {
    const { renderRight, renderCenter, renderLeft } = this.props;
    return (
      <View style={[styles.wrap]}>
        <View sytle={[styles.navGroup, styles.right]}>{renderRight()}</View>

        <View sytle={[styles.navGroup, styles.center]}>{renderCenter()}</View>

        <View sytle={[styles.navGroup, styles.left]}>{renderLeft()}</View>
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
    alignItems: "center",
    backgroundColor: "white",
    flex: 1,
  },
  right: { justifyContent: "flex-start" },
  center: { justifyContent: "center" },
  left: { justifyContent: "flex-end" },
});
