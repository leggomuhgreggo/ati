// @flow

import React, { Component } from "react";

import { COLOR_MAP } from "constants.js";
import { Pattern, ModuleBox } from "components/modules";

type Props = {
  color: $Values<typeof COLOR_MAP>,
  children: string,
};

class ModuleTitle extends Component<Props> {
  getBorderTop = () => ({
    // borderColor: this.props.color,
    // borderSize: 2,
  });

  render() {
    const { color, style } = this.props;
    return (
      <ModuleBox style={[this.getBorderTop(), style]}>
        {this.props.children}
      </ModuleBox>
    );
  }
}

export default ModuleTitle;
