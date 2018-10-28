// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Responsive } from "components/utils";
import { Text } from "components/primitives";

import MobileNav from "./MobileNav/MobileNav";

import { BREAKPOINTS, HEADER_HEIGHT } from "constants/index.js";

type Props = {};
type State = {
  drawerOpen: boolean,
};

class Header extends PureComponent<Props, State> {
  state = {
    drawerOpen: false,
  };

  render() {
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);

          return (
            <View style={[styles.headerWrap]}>
              {isDesktop ? (
                <View style={[styles.headerBar]}>
                  <Text style={[styles.headerText]}>ATI</Text>
                </View>
              ) : (
                <MobileNav />
              )}
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  headerWrap: {
    zIndex: 999,
  },
  headerBar: {
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
  headerText: {
    color: "white",
  },
  inner: {
    backgroundColor: "white",
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  linkGroup: {
    paddingVertical: 10,
  },
  linkGroupsWrap: {},
  link: {},
  icon: {},
  reportWrap: {},
});
