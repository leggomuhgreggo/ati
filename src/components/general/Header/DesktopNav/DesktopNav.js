import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import { NavBar, SocialLinks, Logo, HamburgerIcon } from "../NavBar/index.js";
import { TAG_LINKS, SOCIAL_LINKS } from "../nav-constants";

export default class DesktopNav extends PureComponent {
  render() {
    return (
      <NavBar
        renderRight={() => <Logo />}
        renderCenter={() => <TagLinks links={TAG_LINKS} />}
        renderLeft={() => <SocialLinks links={SOCIAL_LINKS} />}
      />
    );
  }
}

const TagLinks = ({ links }) => {
  return (
    <View style={[styles.tagLinks]}>
      {links.map(({ text, href }) => (
        <Text style={[styles.headerText, styles.linkItem]} href={href}>
          {text}
        </Text>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  tagLinks: {
    flexDirection: "row",
  },
  linkItem: {
    paddingHorizontal: 10,
  },
  headerText: {
    color: "white",
  },
});
