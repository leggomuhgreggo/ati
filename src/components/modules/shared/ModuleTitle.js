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
    borderColor: this.props.color,
    borderSize: 2,
  });

  render() {
    const { color } = this.props;
    return (
      <Pattern color={color}>
        <ModuleBox style={[this.getBorderTop()]}>
          {this.props.children}
        </ModuleBox>
      </Pattern>
    );
  }
}

export default ModuleTitle;
