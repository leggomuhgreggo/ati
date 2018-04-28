// @flow

import React, { Component } from "react";
import { StyleSheet } from "react-native";

import { Text } from "../../../primitives";
import { CATEGORY_COLOR_MAP } from "../../../../constants";

type CategoryProps = {
  category: string,
};
class CategoryLabel extends Component<CategoryProps> {
  getCategoryColor = () => CATEGORY_COLOR_MAP[this.props.category];

  render() {
    const { category } = this.props;
    const color = this.getCategoryColor();
    return (
      <Text style={[styles.categoryLabel, { color }]}>
        {category.toUpperCase()}
      </Text>
    );
  }
}

export default CategoryLabel;

const styles = StyleSheet.create({
  categoryLabel: {
    // color: "white",
  },
});
