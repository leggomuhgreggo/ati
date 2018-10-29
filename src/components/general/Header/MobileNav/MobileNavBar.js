import React, { PureComponent } from "react";

import { NavBar, SocialLinks, Logo, HamburgerIcon } from "../NavBar/index.js";

import { SOCIAL_LINKS_REDUCED } from "constants/index.js";

export default class MobileNavBar extends PureComponent {
  render() {
    const { onMenuButtonClick } = this.props;
    return (
      <NavBar
        renderRight={() => <HamburgerIcon onClick={onMenuButtonClick} />}
        renderCenter={() => <Logo />}
        renderLeft={() => <SocialLinks links={SOCIAL_LINKS_REDUCED} />}
      />
    );
  }
}
