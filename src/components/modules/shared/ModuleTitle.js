// @flow

import React, { PureComponent } from "react";

import { Text } from "components/primitives";
import { ModuleBox } from "components/modules";
import { COLOR_MAP } from "constants/index";

import type { RNW$Styles } from "react-native";

type Props = {
  children: string,
  patternColor: $Values<COLOR_MAP>,
  style: RNW$Styles,
  title: string,
  template: string,
  isDesktop: boolean,
};

class ModuleTitle extends PureComponent<Props> {
  static defaultProps = {
    color: COLOR_MAP.TEXT_COLOR,
  };

  getBorderTop = () => ({
    borderTopColor: this.props.patternColor,
    borderTopWidth: 2,
  });

  getTextStyles = () => {
    const { isDesktop } = this.props;
    return isDesktop
      ? { fontSize: 40, lineHeight: 44 }
      : { fontSize: 38, lineHeight: 36 };
  };

  render() {
    const { patternColor, style, children, title } = this.props;
    return (
      <ModuleBox
        patternColor={patternColor}
        style={[this.getBorderTop(), style]}
      >
        {children ? (
          children
        ) : (
          <Text serif style={[{ fontWeight: "600" }, this.getTextStyles()]}>
            {title}
          </Text>
        )}
      </ModuleBox>
    );
  }
}

export default ModuleTitle;
