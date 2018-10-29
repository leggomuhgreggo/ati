import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import DrawerScaffolding from "./DrawerScaffolding";

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
        <View style={styles.inner}>
          <View>
            <LinkGroup>
              {TAG_LINKS.map(({ href, text }) => (
                <Text key={text} href={href}>
                  {text}
                </Text>
              ))}
            </LinkGroup>

            <Line />

            <LinkGroup>
              {SOCIAL_LINKS.map(({ type, href, text, iconComponent: Icon }) => (
                <Text key={type} href={href}>
                  <Icon /> {text}
                </Text>
              ))}
            </LinkGroup>
          </View>

          <AdReportLink />
        </View>
      </DrawerScaffolding>
    );
  }
}

const styles = StyleSheet.create({
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

const Line = () => <View style={styles.line} />;

const LinkGroup = ({ children }) => (
  <View style={styles.linkGroup}>{children}</View>
);

const AdReportLink = () => (
  <View>
    <Text href="/">Report a Bad Ad</Text>
  </View>
);
