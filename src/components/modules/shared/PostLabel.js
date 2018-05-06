// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "components/primitives";

import { CATEGORY_COLOR_MAP } from "constants.js";
import type { Categories, CategoryColors } from "components/modules";
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
    const { fill, category, inline, spacer } = this.props;
    const categoryColor = getCategoryColor(category);
    const LABEL_HEIGHT = 30;

    console.log(fill);

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
            backgroundColor: categoryColor,
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
    const { fill, category } = this.props;

    const color = fill ? "white" : getCategoryColor(category);

    return {
      color,
      fontSize: 12,
      fontWeight: "600",
    };
  };

  getLableText = (): string => this.props.category.toUpperCase();

  render() {
    const { category, containerStyles, textStyles } = this.props;

    const localContainerStyles = this.getContainerStyles();
    const localTextStyles = this.getTextStyles();

    return (
      <View style={[localContainerStyles, containerStyles]}>
        <Text style={[localTextStyles, textStyles]}>{this.getLableText()}</Text>
      </View>
    );
  }
}

export default PostLabel;

const getCategoryColor = (category: Categories): CategoriesColors =>
  CATEGORY_COLOR_MAP[category];
