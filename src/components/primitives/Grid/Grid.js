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
};

class Grid extends PureComponent<Props> {
  static defaultProps = {
    spacer: 10,
    style: {},
  };

  renderChildren = () => {
    const { spacer, children } = this.props;
    return React.Children.map(children, child => {
      return (
        <View style={[styles.listItem, { padding: spacer / 2 }]}>
          {React.cloneElement(child)}
        </View>
      );
    });
    return;
  };

  render() {
    const { style, spacer } = this.props;
    return (
      <View style={{ position: "relative", width: "100%" }}>
        <View style={[styles.listWrap, { margin: -(spacer / 2) }, style]}>
          {this.renderChildren()}
        </View>
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
