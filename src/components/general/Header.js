// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import {
  FaBars,
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaRubleSign,
} from "react-icons/fa";

import { Responsive } from "components/utils";
import { Text } from "components/primitives";

import NavDrawer from "./Nav/NavDrawer";
import DrawerAnimationToggle from "./Nav/DrawerAnimationToggle";

import { BREAKPOINTS, HEADER_HEIGHT } from "constants/index.js";

const TAG_LINKS = [
  {
    href: "/tag/history/",
    text: "history",
  },
  {
    href: "/tag/science/",
    text: "science",
  },
  {
    href: "/tag/news/",
    text: "news",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/allthatsinteresting",
    text: "facebook",
    iconComponent: FaFacebookF,
  },
  {
    href: "https://twitter.com/ATInteresting",
    text: "twitter",
    iconComponent: FaTwitter,
  },
  {
    href: "https://www.pinterest.com/allthatisintere/",
    text: "pinterest",
    iconComponent: FaPinterest,
  },
  {
    href: "http://interestin.gg/AN2pn3",
    text: "Newsletter",
    iconComponent: FaEnvelope,
  },
];

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
                <DrawerAnimationToggle>
                  {({ toggleDrawer, isDrawerOpen, drawerAnimation }) => {
                    return (
                      <>
                        <View style={[styles.headerBar]}>
                          <View sytle={styles.right}>
                            <Text
                              onClick={toggleDrawer}
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

                        <NavDrawer
                          isDrawerOpen={isDrawerOpen}
                          toggleDrawer={toggleDrawer}
                          drawerAnimation={drawerAnimation}
                        >
                          <View style={styles.inner}>
                            <View style={styles.linkGroupsWrap}>
                              <View style={styles.linkGroup}>
                                {TAG_LINKS.map(({ href, text }) => (
                                  <Link key={text} href={href}>
                                    {text}
                                  </Link>
                                ))}
                              </View>

                              <View style={styles.line} />

                              <View style={styles.linkGroup}>
                                {SOCIAL_LINKS.map(
                                  ({ href, text, iconComponent: Icon }) => (
                                    <Link key={text} href={href}>
                                      <Icon /> {text}
                                    </Link>
                                  ),
                                )}
                              </View>
                            </View>

                            <View>
                              <Link href="/">Report a Bad Ad</Link>
                            </View>
                          </View>
                        </NavDrawer>
                      </>
                    );
                  }}
                </DrawerAnimationToggle>
              )}
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Header;

type LinkProps = { href: string, children: any, style?: any };

const Link = ({ href, children, style }: LinkProps) => (
  <Text style={[styles.link, style]} accessibilityRole="link" href={href}>
    {children}
  </Text>
);

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
