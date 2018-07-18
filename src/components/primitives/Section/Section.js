// @flow

import React, { PureComponent } from "react";

import { Row } from "components/primitives";

class Section extends PureComponent {
  render() {
    const { children, style } = this.props;
    return (
      <Row style={[{ alignItems: "center", marginTop: 100 }, style]}>
        {children}
      </Row>
    );
  }
}

export default Section;
