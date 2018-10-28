// @flow

import React, { PureComponent } from "react";
import { View, Animated, Easing } from "react-native";

type Props = { children: any };

type State = {
  drawerAnimation: any,
  isDrawerOpen: boolean,
  isAnimatingIn: boolean,
  isAnimatingOut: boolean,
};

class DrawerAnimationToggle extends PureComponent<Props, State> {
  state = {
    drawerAnimation: new Animated.Value(0),
    isDrawerOpen: false,
    isAnimatingIn: false,
    isAnimatingOut: false,
  };

  toggleDrawer = () => {
    const { isAnimatingIn, isAnimatingOut, isDrawerOpen } = this.state;
    if (!isDrawerOpen || isAnimatingOut) {
      this.showDrawer();
    }

    if (isDrawerOpen || isAnimatingIn) {
      this.hideDrawer();
    }
  };

  showDrawer = () => {
    const { drawerAnimation } = this.state;

    this.setState({ isDrawerOpen: true, isAnimatingIn: true }, () =>
      Animated.timing(drawerAnimation, {
        toValue: 1,
        duration: 250,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }).start(this.setState({ isAnimatingIn: false })),
    );
  };

  hideDrawer = () => {
    const { drawerAnimation } = this.state;

    this.setState({ isAnimatingOut: true }, () =>
      Animated.timing(drawerAnimation, {
        toValue: 0,
        duration: 250,
        easing: Easing.bezier(0.4, 0, 0.2, 1),
      }).start(this.setState({ isDrawerOpen: false, isAnimatingOut: false })),
    );
  };

  render() {
    const { drawerAnimation, isDrawerOpen } = this.state;

    return this.props.children({
      drawerAnimation,
      isDrawerOpen,
      toggleDrawer: this.toggleDrawer,
    });
  }
}
export default DrawerAnimationToggle;
