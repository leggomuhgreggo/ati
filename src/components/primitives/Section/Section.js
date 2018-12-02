// @flow

import React, { PureComponent } from "react";

import { Row } from "components/primitives";

import { Responsive } from "components/utils";
import {
  BREAKPOINTS,
  SECTION_SPACERS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";

type Props = {
  topSpacing: $Values<typeof SECTION_SPACING_VARIANTS>,
};

class Section extends PureComponent<Props> {
  static defaultProps = {
    topSpacing: SECTION_SPACING_VARIANTS.SMALL,
  };

  render() {
    const { children, style, topSpacing } = this.props;

    return (
      <Responsive>
        {({ minWidth }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          const spacing = isDesktop
            ? SECTION_SPACERS[topSpacing]
            : SECTION_SPACERS[SECTION_SPACING_VARIANTS.SMALL];
          return (
            <Row style={[{ alignItems: "center", marginTop: spacing }, style]}>
              {children}
            </Row>
          );
        }}
      </Responsive>
    );
  }
}

export default Section;
