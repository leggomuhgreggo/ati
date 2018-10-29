import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import { NavBar, SocialLinks, Logo } from "../NavBar/index.js";
import { TAG_LINKS, SOCIAL_LINKS } from "constants/index.js";

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
      {links.map(({ type, text, href }) => (
        <Text
          key={type}
          style={[styles.headerText, styles.linkItem]}
          accessibilityRole="link"
          href={href}
        >
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
    paddingHorizontal: 15,
    fontSize: 21,
  },
  headerText: {
    color: "white",
  },
});
