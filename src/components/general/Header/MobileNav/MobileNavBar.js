import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { FaBars } from "react-icons/fa";
import { Text } from "components/primitives";
import NavBar from "../NavBar";
import NavBarSocialLinks from "../NavBarSocialLinks";
import { SOCIAL_LINKS } from "../nav-constants";

export default class MobileNavBar extends PureComponent {
  render() {
    const { onMenuButtonClick } = this.props;
    return (
      <NavBar
        renderRight={() => <HamburgerMenuIcon onClick={onMenuButtonClick} />}
        renderCenter={() => <AtiLogo />}
        renderLeft={() => <NavBarSocialLinks links={SOCIAL_LINKS} />}
      />
    );
  }
}

const HamburgerMenuIcon = ({ onClick }) => (
  <Text onClick={onClick} style={[styles.headerText]}>
    <FaBars />
  </Text>
);

const AtiLogo = () => <Text style={[styles.headerText]}>ATI</Text>;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
  },
});
