// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { Text } from "../../../primitives";
import { CATEGORY_COLOR_MAP } from "../../../../constants";
import { LABEL_HEIGHT } from "./constants";

type CategoryProps = {
  category: string,
};
class CategoryLabel extends Component<CategoryProps> {
  getCategoryColor = () => CATEGORY_COLOR_MAP[this.props.category];

  render() {
    const { category, style } = this.props;
    const backgroundColor = this.getCategoryColor();
    return (
      <View style={[styles.categoryWrap, { backgroundColor }, style]}>
        <Text style={[styles.categoryLabel]}>{category.toUpperCase()}</Text>
      </View>
    );
  }
}

export default CategoryLabel;

const styles = StyleSheet.create({
  categoryWrap: {
    height: LABEL_HEIGHT,
    justifyContent: "center",
    paddingHorizontal: 10,
  },
  categoryLabel: {
    color: "white",
  },
});
