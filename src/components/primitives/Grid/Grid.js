// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { ChildrenArray } from "react";
import type { RNW$Styles } from "react-native";

type Props = {
  style?: RNW$Styles,
  children: ChildrenArray,
  spacer?: number | string,
  itemsPerRow?: number,
};

class Grid extends PureComponent<Props> {
  static defaultProps = {
    spacer: 10,
    style: {},
    itemsPerRow: 3,
  };

  getItemStyles = (multiplier = 1) => {
    const { itemsPerRow, spacer } = this.props;

    const styles = StyleSheet.create({
      item: {
        flexBasis: `${(100 / itemsPerRow) * multiplier}%`,
        padding: spacer / 2,
      },
    });

    return styles.item;
  };

  getListStyles = () => {
    const { spacer } = this.props;

    return {
      flexDirection: "row",
      flexWrap: "wrap",
      margin: -spacer / 2,
    };
  };

  renderChildren = () => {
    const { children } = this.props;
    return React.Children.map(children, child => {
      const multiplier = child.type.name === "LG" ? 2 : 1;

      console.log();
      return (
        <View style={this.getItemStyles(multiplier)}>
          {React.cloneElement(child)}
        </View>
      );
    });
  };

  render() {
    return (
      <View style={[{ position: "relative" }]}>
        <View style={[this.getListStyles()]}>{this.renderChildren()}</View>
      </View>
    );
  }
}
export default Grid;
