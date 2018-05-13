// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Ratio } from "components/primitives";

import type { ChildrenArray } from "react";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

type Props = {
  style?: StyleObj,
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
        flexBasis: `${100 / itemsPerRow * multiplier}%`,
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
      // const multiplier = child.type !== Card
      return (
        <View style={this.getItemStyles()}>{React.cloneElement(child)}</View>
      );
    });
    return;
  };

  render() {
    const { spacer } = this.props;
    return (
      <View style={[{ position: "relative" }]}>
        <View style={[this.getListStyles()]}>{this.renderChildren()}</View>
      </View>
    );
  }
}
export default Grid;

const styles = StyleSheet.create({
  listWrap: {
    flexDirection: "row",
    flexWrap: "wrap",
  },
  listItem: {},
});
