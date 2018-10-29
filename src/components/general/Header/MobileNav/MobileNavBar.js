import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Text } from "components/primitives";

import { NavBar, SocialLinks, Logo, HamburgerIcon } from "../NavBar/index.js";

import { SOCIAL_LINKS } from "../nav-constants";

export default class MobileNavBar extends PureComponent {
  render() {
    const { onMenuButtonClick } = this.props;
    return (
      <NavBar
        renderRight={() => <HamburgerIcon onClick={onMenuButtonClick} />}
        renderCenter={() => <Logo />}
        renderLeft={() => <SocialLinks links={SOCIAL_LINKS} />}
      />
    );
  }
}
