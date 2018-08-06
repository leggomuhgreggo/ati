// @flow

import React, { PureComponent } from "react";

import { Row } from "components/primitives";
import { Responsive } from "components/utils";

import createLockFunction from "utils/lock";

import { SECTION_SPACERS, SECTION_SPACING_VARIANTS } from "constants/index";

type Props = {
  topSpacing: $Values<typeof SECTION_SPACING_VARIANTS>,
};

class Section extends PureComponent<Props> {
  static defaultProps = {
    topSpacing: SECTION_SPACING_VARIANTS.SM,
  };

  isSmall = () => this.props.topSpacing === SECTION_SPACING_VARIANTS.SM;

  render() {
    const { children, style, topSpacing } = this.props;

    const spacing = SECTION_SPACERS[topSpacing];

    return (
      <Row style={[{ alignItems: "center", marginTop: spacing }, style]}>
        {children}
      </Row>
    );
  }
}

export default Section;
