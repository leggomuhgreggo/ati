// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Text } from "components/primitives";
import { CATEGORY_COLOR_MAP } from "constants.js";
import { LABEL_HEIGHT } from "./constants";

type CategoryProps = {
  category: string,
};
class CategoryLabel extends Component<CategoryProps> {
  getCategoryColor = () => CATEGORY_COLOR_MAP[this.props.category];

  render() {
    const { category, style } = this.props;
    const color = this.getCategoryColor();
    return (
      <Text style={[styles.categoryLabel, { color }, style]}>
        {category.toUpperCase()}
      </Text>
    );
  }
}

export default CategoryLabel;

const styles = StyleSheet.create({
  categoryLabel: {
    fontSize: 12,
    fontWeight: "600",
    justifyContent: "center",
    height: LABEL_HEIGHT,
  },
});
