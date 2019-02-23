import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import DrawerScaffolding from "./DrawerScaffolding";

import { FaBug } from "react-icons/fa";

import { TAG_LINKS, SOCIAL_LINKS, BUG_REPORT_STRING } from "constants/index.js";

type Props = {
  isDrawerOpen: boolean,
  toggleDrawer: any,
  drawerAnimation: any,
};

export default class DrawerContents extends PureComponent<Props> {
  render() {
    const { isDrawerOpen, toggleDrawer, drawerAnimation } = this.props;

    return (
      <DrawerScaffolding
        isDrawerOpen={isDrawerOpen}
        toggleDrawer={toggleDrawer}
        drawerAnimation={drawerAnimation}
      >
        <DrawerInner>
          <View>
            <LinkGroup>
              {TAG_LINKS.map(({ type, href, text }) => (
                <View key={type} style={styles.linkItem}>
                  <Text
                    style={styles.tagText}
                    accessibilityRole="link"
                    href={href}
                  >
                    {text}
                  </Text>
                </View>
              ))}
            </LinkGroup>

            <Line />

            <LinkGroup>
              {SOCIAL_LINKS.map(
                ({ type, href, text, iconComponent: SocialIcon }) => (
                  <View key={type} style={styles.linkItem}>
                    <View style={styles.icon}>
                      <SocialIcon />
                    </View>
                    <Text
                      style={styles.text}
                      accessibilityRole="link"
                      href={href}
                    >
                      {text}
                    </Text>
                  </View>
                ),
              )}

              <AdReportLink />
            </LinkGroup>
          </View>
        </DrawerInner>
      </DrawerScaffolding>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: "white",
    padding: 25,
    flex: 1,
    justifyContent: "space-between",
  },
  linkItem: {
    flexDirection: "row",
    height: 50,
    alignItems: "center",
  },
  tagText: {
    fontSize: 21,
  },
  line: {
    width: 25,
    height: 1,
    backgroundColor: "#CCC",
    marginVertical: 25,
  },
  icon: {
    marginRight: 10,
  },
});

const Line = () => <View style={styles.line} />;

const LinkGroup = ({ children }) => (
  <View style={styles.linkGroup}>{children}</View>
);

const AdReportLink = () => (
  <View style={styles.linkItem}>
    <Text accessibilityRole="link" href="/">
      {BUG_REPORT_STRING}
    </Text>
  </View>
);

const DrawerInner = ({ children }) => (
  <View style={styles.inner}>{children}</View>
);
