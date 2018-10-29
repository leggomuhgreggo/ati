// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import MobileNavBar from "./MobileNavBar";
import DrawerAnimationToggle from "./DrawerAnimationToggle";
import MobileNavDrawer from "./MobileNavDrawer";

type Props = {};

class MobileNav extends PureComponent<Props> {
  render() {
    return (
      <DrawerAnimationToggle>
        {({ toggleDrawer, isDrawerOpen, drawerAnimation }) => {
          return (
            <>
              <MobileNavBar onMenuButtonClick={toggleDrawer} />
              <MobileNavDrawer
                toggleDrawer={toggleDrawer}
                isDrawerOpen={isDrawerOpen}
                drawerAnimation={drawerAnimation}
              />
            </>
          );
        }}
      </DrawerAnimationToggle>
    );
  }
}

export default MobileNav;
