// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet, Animated, Easing } from "react-native";
import {
  FaFacebookF,
  FaTwitter,
  FaEnvelope,
  FaPinterest,
  FaBalanceScale,
} from "react-icons/fa";
import { HEADER_HEIGHT } from "constants/index.js";

import { Text } from "components/primitives";
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

type Props = {
  drawerOpen: boolean,
};
type State = {
  drawerAnimation: any,
};

class NavDrawer extends PureComponent<Props, State> {
  state = {
    drawerAnimation: new Animated.Value(0),
  };

  showDrawer = () => {
    const { drawerAnimation } = this.state;
    Animated.timing(drawerAnimation, {
      toValue: 1,
      duration: 500,
      easing: Easing.bezier(0.33, 0.38, 0.3, 0.9),
    }).start();
  };
  hideDrawer = () => {
    const { drawerAnimation } = this.state;
    Animated.timing(drawerAnimation, {
      toValue: 0,
      duration: 200,
    }).start();
  };

  render() {
    this.props.drawerOpen ? this.showDrawer() : this.hideDrawer();

    const labelPosition = this.state.drawerAnimation.interpolate({
      inputRange: [0, 1],
      outputRange: ["-100%", "0%"],
    });

    return (
      <Animated.View
        style={[styles.wrap, { transform: [{ translateX: labelPosition }] }]}
      >
        <View style={styles.inner}>
          <View style={styles.linkGroupsWrap}>
            <View style={styles.linkGroup}>
              {TAG_LINKS.map(({ href, text }) => (
                <Link href={href}>{text}</Link>
              ))}
            </View>

            <View style={styles.line} />

            <View style={styles.linkGroup}>
              {SOCIAL_LINKS.map(({ href, text, iconComponent: Icon }) => (
                <Link href={href}>
                  <Icon /> {text}
                </Link>
              ))}
            </View>
          </View>

          <View>
            <Link href="/">Report a Bad Ad</Link>
          </View>
        </View>
      </Animated.View>
    );
  }
}
export default NavDrawer;

const Link = ({ href, children, style }) => (
  <Text style={[styles.link, style]} accessibilityRole="link" href={href}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  wrap: {
    position: "absolute",
    top: 0,
    left: 0,
    height: "100vh",
    width: "100%",
    paddingTop: HEADER_HEIGHT,
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
