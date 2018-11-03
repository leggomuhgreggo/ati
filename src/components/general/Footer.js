// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";
import { Responsive } from "components/utils";

import {
  BREAKPOINTS,
  FOOTER_HEIGHT,
  SOCIAL_LINKS_REDUCED,
  HOME_LINK,
  PBH_NETWORK_LINKS,
  SECTION_SPACING,
} from "constants/index.js";

type Props = {};

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
                  <Text
                    accessibilityRole="link"
                    style={[styles.text, hPadding]}
                    href={HOME_LINK.href}
                  >
                    {HOME_LINK.text.toUpperCase()}
                  </Text>
                </View>
              )}
              <View style={styles.linkList}>
                {PBH_NETWORK_LINKS.map(({ href, text }) => (
                  <Text
                    key={text}
                    href={href}
                    style={[styles.text, hPadding]}
                    accessibilityRole="link"
                  >
                    {text.toUpperCase()}
                  </Text>
                ))}
              </View>
              <View style={styles.linkList}>
                {SOCIAL_LINKS_REDUCED.map(
                  ({ href, type, iconComponent: SocialIcon }) => (
                    <Text
                      key={type}
                      href={href}
                      style={[styles.text, styles.socialLink, hPadding]}
                      accessibilityRole="link"
                    >
                      <SocialIcon />
                    </Text>
                  ),
                )}
              </View>
            </View>
          );
        }}
      </Responsive>
    );
  }
}

export default Footer;

const styles = StyleSheet.create({
  wrap: {
    width: "100%",
    height: FOOTER_HEIGHT,
    backgroundColor: "black",
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    marginTop: SECTION_SPACING.SM,
  },
  linkList: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    color: "white",
    fontSize: 12,
  },
  socialLink: {
    fontSize: 16,
  },
});
