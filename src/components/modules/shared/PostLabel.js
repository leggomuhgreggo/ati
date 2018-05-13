// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Text } from "components/primitives";
import type { Categories } from "components/modules";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  category: Categories,
  box?: boolean,
  containerStyles?: StyleObj,
  textStyles?: StyleObj,
  inline: boolean,
  spacer: number,
  color: string,
  labelHeight?: number,
};

class PostLabel extends PureComponent<Props> {
  static defaultProps = {
    fill: false,
    inline: false,
    containerStyles: {},
    textStyles: {},
    spacer: 8,
    labelHeight: 30,
  };

  getPositionStyles = () => {
    const { inline, spacer } = this.props;
    return inline
      ? null
      : {
          position: "absolute",
          top: 0,
          left: 0,
          transform: [
            {
              translateY: `calc(-100% - ${spacer}px)`,
            },
          ],
        };
  };

  getFillStyles = () => {
    const { labelHieght, fill, color } = this.props;

    return fill
      ? {
          backgroundColor: color,
          paddingHorizontal: 10,
          height: labelHieght,
          justifyContent: "center",
        }
      : null;
  };

  getContainerStyles = (): StyleObj => {
    return {
      ...this.getFillStyles(),
      ...this.getPositionStyles(),
    };
  };

  getTextStyles = (): StyleObj => {
    const { fill, color } = this.props;

    return {
      color: fill ? "white" : color,
      fontSize: 12,
      fontWeight: "600",
    };
  };

  getLableText = (): string => this.props.category.toUpperCase();

  render() {
    const { style, textStyles } = this.props;

    const localContainerStyles = this.getContainerStyles();
    const localTextStyles = this.getTextStyles();

    return (
      <View style={[localContainerStyles, style]}>
        <Text style={[localTextStyles, textStyles]}>{this.getLableText()}</Text>
      </View>
    );
  }
}

export default PostLabel;
