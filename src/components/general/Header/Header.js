// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Responsive } from "components/utils";
import { Text } from "components/primitives";

import MobileNav from "./MobileNav/MobileNav";
import DesktopNav from "./DesktopNav/DesktopNav";

import { BREAKPOINTS, HEADER_HEIGHT } from "constants/index.js";

const HEADER_Z_INDEX = 999;

type Props = {};

class Header extends PureComponent<Props> {
  render() {
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);

          return (
            <View style={[styles.headerWrap]}>
              {isDesktop ? <DesktopNav /> : <MobileNav />}
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
    zIndex: HEADER_Z_INDEX,
  },
});
