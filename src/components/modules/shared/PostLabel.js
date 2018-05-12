// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Text } from "components/primitives";
import type { Categories, colors } from "components/modules";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  category: Categories,
  box?: boolean,
  containerStyles?: StyleObj,
  textStyles?: StyleObj,
  inline: boolean,
  spacer: number,
};

class PostLabel extends PureComponent<Props> {
  static defaultProps = {
    fill: false,
    inline: false,
    containerStyles: {},
    textStyles: {},
    spacer: 8,
  };

  getContainerStyles = (): StyleObj => {
    const { fill, category, color, inline, spacer } = this.props;

    const LABEL_HEIGHT = 30;

    const baseStyles = () => ({});

    const positionStyles = () =>
      inline
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

    const fillStyles = () =>
      fill
        ? {
            backgroundColor: color,
            paddingHorizontal: 10,
            height: LABEL_HEIGHT,
            justifyContent: "center",
          }
        : null;

    return {
      ...baseStyles(),
      ...fillStyles(),
      ...positionStyles(),
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
