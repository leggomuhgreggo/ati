// @flow

import React, { PureComponent } from "react";

import { Row } from "components/primitives";
import { Responsive } from "components/utils";

import createLockFunction from "utils/lock";

import { THEME_SPACING } from "constants.js";

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

  getMarginTop = screenWidth => {
    const { spacingTop } = this.props;
    const {
      SECTION_SPACING: { SM: smallSpacing, LG: largeSpacing },
    } = THEME_SPACING;

    const lock = createLockFunction({
      min: smallSpacing,
      max: largeSpacing,
    })(screenWidth);

    return spacingTop === SPACING_TYPES.SM ? smallSpacing : lock;
  };

  render() {
    const { children, style } = this.props;

    return (
      <Responsive>
        {({ width: screenWidth }) => {
          const marginTop = this.getMarginTop(screenWidth);

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
