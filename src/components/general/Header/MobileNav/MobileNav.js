// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { FaBars } from "react-icons/fa";

import { Text } from "components/primitives";

import DrawerAnimationToggle from "./DrawerAnimationToggle";
import DrawerScaffolding from "./DrawerScaffolding";

import { HEADER_HEIGHT } from "constants/index.js";
import { TAG_LINKS, SOCIAL_LINKS } from "./nav-constants";

type Props = {};
type State = {
  drawerOpen: boolean,
};

class MobileNav extends PureComponent<Props, State> {
  render() {
    return (
      <DrawerAnimationToggle>
        {({ toggleDrawer, isDrawerOpen, drawerAnimation }) => {
          return (
            <>
              <NavBar onMenuButtonClick={toggleDrawer} />

              <DrawerScaffolding
                isDrawerOpen={isDrawerOpen}
                toggleDrawer={toggleDrawer}
                drawerAnimation={drawerAnimation}
              >
                <DrawerContents />
              </DrawerScaffolding>
            </>
          );
        }}
      </DrawerAnimationToggle>
    );
  }
}

export default MobileNav;

const NavBar = ({ onMenuButtonClick }) => {
  return (
    <View style={[styles.headerBar]}>
      <View sytle={styles.right}>
        <Text onClick={onMenuButtonClick} style={[styles.headerText]}>
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
  );
};

const DrawerContents = () => {
  return (
    <View style={styles.inner}>
      <View style={styles.linkGroupsWrap}>
        <View style={styles.linkGroup}>
          {TAG_LINKS.map(({ href, text }) => (
            <Text key={text} href={href}>
              {text}
            </Text>
          ))}
        </View>

        <View style={styles.line} />

        <View style={styles.linkGroup}>
          {SOCIAL_LINKS.map(({ href, text, iconComponent: Icon }) => (
            <Text key={text} href={href}>
              <Icon /> {text}
            </Text>
          ))}
        </View>
      </View>

      <View>
        <Text href="/">Report a Bad Ad</Text>
      </View>
    </View>
  );
};

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
