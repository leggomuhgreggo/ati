import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import DrawerScaffolding from "./DrawerScaffolding";

import { FaBug } from "react-icons/fa";

import { TAG_LINKS, SOCIAL_LINKS } from "../nav-constants";

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
                <View style={styles.linkItem}>
                  <Text style={styles.tagText} key={type} href={href}>
                    {text}
                  </Text>
                </View>
              ))}
            </LinkGroup>

            <Line />

            <LinkGroup>
              {SOCIAL_LINKS.map(({ type, href, text, iconComponent: Icon }) => (
                <View style={styles.linkItem}>
                  <View style={styles.icon}>
                    <Icon />
                  </View>
                  <Text style={styles.text} key={type} href={href}>
                    {text}
                  </Text>
                </View>
              ))}
            </LinkGroup>
          </View>

          <AdReportLink />
        </DrawerInner>
      </DrawerScaffolding>
    );
  }
}

const styles = StyleSheet.create({
  inner: {
    backgroundColor: "white",
    padding: 15,
    flex: 1,
    justifyContent: "space-between",
  },
  linkGroup: {
    paddingVertical: 10,
  },
  linkItem: {
    flexDirection: "row",
    paddingVertical: 10,
    alignItems: "center",
  },
  tagText: {
    fontSize: 21,
  },
  line: {
    width: 50,
    height: 2,
    backgroundColor: "#CCC",
    marginVertical: 15,
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
    <View style={styles.icon}>
      <FaBug />
    </View>
    <Text href="/">Report a Bad Ad</Text>
  </View>
);

const DrawerInner = ({ children }) => (
  <View style={styles.inner}>{children}</View>
);
