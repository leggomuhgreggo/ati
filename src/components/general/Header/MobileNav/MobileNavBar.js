import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { FaBars } from "react-icons/fa";
import { Text } from "components/primitives";
import NavBar from "../NavBar";

export default class MobileNavBar extends PureComponent {
  render() {
    const { onMenuButtonClick } = this.props;
    return (
      <NavBar
        renderRight={() => <HamburgerMenuIcon onClick={onMenuButtonClick} />}
        renderCenter={() => <AtiLogo />}
        renderLeft={() => <SocialLinks />}
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

const SocialLinks = () => <Text style={[styles.headerText]}>SOCIAL</Text>;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
  },
});
