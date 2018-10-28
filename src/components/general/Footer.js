// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { FaFacebookF, FaTwitter } from "react-icons/fa";

import { Text } from "components/primitives";
import { Responsive } from "components/utils";

import { BREAKPOINTS, FOOTER_HEIGHT } from "constants/index.js";

type Props = {};

const HOME_LINK = {
  text: "ATI",
  href: "/",
};

const PBH_NETWORK_LINKS = [
  {
    text: "About",
    href: "/about-all-thats-interesting",
  },
  {
    text: "Advertise",
    href: "https://about.pbh-network.com/",
  },
  {
    text: "Jobs",
    href: "/jobs",
  },
  {
    text: "Privacy Policy",
    href: "/privacy-policy",
  },
];

const SOCIAL_LINKS = [
  {
    href: "https://www.facebook.com/allthatsinteresting",
    type: "facebook",
    componentType: FaFacebookF,
  },
  {
    href: "https://twitter.com/ATInteresting",
    type: "twitter",
    componentType: FaTwitter,
  },
];
class Footer extends PureComponent<Props> {
  render() {
    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);

          const hPadding = { paddingHorizontal: isDesktop ? 30 : 10 };
          return (
            <View style={[styles.wrap]}>
              {isDesktop && (
                <View style={styles.linkList}>
                  <Link style={hPadding} href={HOME_LINK.href}>
                    {HOME_LINK.text.toUpperCase()}
                  </Link>
                </View>
              )}
              <View style={styles.linkList}>
                {PBH_NETWORK_LINKS.map(({ href, text }) => (
                  <Link style={hPadding} key={text} href={href}>
                    {text.toUpperCase()}
                  </Link>
                ))}
              </View>
              <View style={styles.linkList}>
                {SOCIAL_LINKS.map(({ href, type, componentType: Icon }) => (
                  <Link
                    style={[styles.socialLink, hPadding]}
                    key={type}
                    href={href}
                  >
                    <Icon />
                  </Link>
                ))}
              </View>
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Footer;

const Link = ({ href, children, style }) => (
  <Text style={[styles.link, style]} accessibilityRole="link" href={href}>
    {children}
  </Text>
);

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: FOOTER_HEIGHT,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: 30,
  },
  linkList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  link: {
    color: "white",
    fontSize: 12,
  },
  socialLink: {
    fontSize: 16,
  },
});
