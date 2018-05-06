// @flow

import React, { Component } from "react";

import { COLOR_MAP } from "constants.js";
import { Pattern, ModuleBox } from "components/modules";

type Props = {
  color: $Values<typeof COLOR_MAP>,
  children: string,
};

class ModuleTitle extends Component<Props> {
  static defaultProps = {
    color: COLOR_MAP.ORANGE,
  };

  getBorderTop = () => ({
    borderTopColor: this.props.color,
    borderTopWidth: 2,
  });

  render() {
    const { color, style } = this.props;
    return (
      <ModuleBox color={color} style={[this.getBorderTop(), style]}>
        {this.props.children}
      </ModuleBox>
    );
  }
}

export default ModuleTitle;
