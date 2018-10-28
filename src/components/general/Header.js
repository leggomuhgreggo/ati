// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
} from "react-icons/fa";

import { Responsive } from "components/utils";
import { Text } from "components/primitives";

import { BREAKPOINTS, HEADER_HEIGHT } from "constants/index.js";

import NavDrawer from "./Nav/NavDrawer";

type Props = {};
type State = {
  drawerOpen: boolean,
};

class Header extends PureComponent<Props, State> {
  state = {
    drawerOpen: false,
  };
  toggleDrawer = () => {
    this.setState({ drawerOpen: !this.state.drawerOpen });
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
                <>
                  <View style={[styles.headerBar]}>
                    <View sytle={styles.right}>
                      <Text
                        onClick={this.toggleDrawer}
                        style={[styles.headerText]}
                      >
                        <FaBars />
                      </Text>
                    </View>

                    <View sytle={styles.center}>
                      <Text style={[styles.headerText]}>ATI</Text>
                    </View>

                    <View sytle={styles.left}>
                      <Text style={[styles.headerText]}>ATI</Text>
                    </View>
                  </View>
                  <NavDrawer drawerOpen={this.state.drawerOpen} />
                </>
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
});
