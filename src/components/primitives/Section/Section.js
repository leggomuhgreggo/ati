// @flow

import React, { PureComponent } from "react";

import { Row } from "components/primitives";
import { Responsive } from "components/utils";

import createLockFunction from "utils/lock";

import { SECTION_SPACING } from "constants/index";

const SPACING_TYPES = {
  SM: "sm",
  LG: "lg",
};

type Props = {
  spacingTop: $Values<typeof SPACING_TYPES>,
};

class Section extends PureComponent<Props> {
  static defaultProps = {
    spacing: SPACING_TYPES.SM,
  };

  isSmall = () => this.props.spacingTop === SPACING_TYPES.SM;

  render() {
    const { children, style } = this.props;

    return this.isSmall() ? (
      <Row
        style={[{ alignItems: "center", marginTop: SECTION_SPACING.SM }, style]}
      >
        {children}
      </Row>
    ) : (
      <Responsive>
        {({ getLock }) => {
          const marginTop = getLock({
            min: SECTION_SPACING.SM,
            max: SECTION_SPACING.LG,
          });
          return (
            <Row style={[{ alignItems: "center", marginTop }, style]}>
              {children}
            </Row>
          );
        }}
      </Responsive>
    );
  }
}

export default Section;
