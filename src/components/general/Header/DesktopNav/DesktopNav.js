import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import NavBar from "../NavBar";
import NavBarSocialLinks from "../NavBarSocialLinks";
import { TAG_LINKS, SOCIAL_LINKS } from "../nav-constants";

export default class DesktopNav extends PureComponent {
  render() {
    const { onMenuButtonClick } = this.props;
    return (
      <NavBar
        renderRight={() => <AtiLogo />}
        renderCenter={() => <TagLinks links={TAG_LINKS} />}
        renderLeft={() => <NavBarSocialLinks links={SOCIAL_LINKS} />}
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

const AtiLogo = () => <Text style={[styles.headerText]}>ATI</Text>;

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
