// @flow

import React, { PureComponent } from "react";
import { StyleSheet, Animated } from "react-native";

import { HEADER_HEIGHT, elevation } from "constants/index.js";

type Props = {
  isDrawerOpen: boolean,
  toggleDrawer: any,
  drawerAnimation: any,
  children: any,
};

class NavDrawer extends PureComponent<Props> {
  render() {
    const {
      isDrawerOpen,
      toggleDrawer,
      drawerAnimation,
      children,
    } = this.props;

    const drawerPosition = drawerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["-100%", "0%"],
    });

    const overlayOpacity = drawerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: [0, 1],
    });

    return (
      <>
        {isDrawerOpen && (
          <Animated.View
            onClick={toggleDrawer}
            style={[styles.overlay, { opacity: overlayOpacity }]}
          />
        )}

        <Animated.View
          style={[styles.wrap, { transform: [{ translateX: drawerPosition }] }]}
        >
          {children}
        </Animated.View>
      </>
    );
  }
}
export default NavDrawer;

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: "rgba(0,0,0,.32)",
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
  },
  wrap: {
    ...elevation(2),
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    paddingTop: HEADER_HEIGHT,
  },
});
