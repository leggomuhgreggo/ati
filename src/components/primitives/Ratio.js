// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import type { Node } from "react";

/**
 * To Do
 * enforce single child type
 * apply content styles to child
 * error handling?
 * expand API?
 */

type Props = {
  ratio?: string,
  children?: Node,
};

const FB_RATIO = "1.88:1";

class Ratio extends PureComponent<Props> {
  static defaultProps = {
    ratio: FB_RATIO,
    children: <View style={{ backgroundColor: "#ebebeb" }} />,
  };

  getRatioPercentageFromRatioString = () => {
    const { width, height } = this.getDimensionsFromRatio();
    return height / width * 100 + "%";
  };

  getDimensionsFromRatio = () => {
    const { ratio } = this.props;
    const [width, height] = ratio.split(":");
    return { width, height };
  };

  getPaddingBottom = () => ({
    paddingBottom: this.getRatioPercentageFromRatioString(),
  });

  renderChild = () => {
    const { children } = this.props;

    return children
      ? React.Children.map(children, child => {
          return React.cloneElement(child, {
            style: [styles.content, child.props.style],
          });
        })
      : null;
  };

  render() {
    return (
      <View>
        <View style={[styles.wrap, this.getPaddingBottom()]}>
          {this.renderChild()}
        </View>
      </View>
    );
  }
}

export default Ratio;

const styles = StyleSheet.create({
  wrap: {
    overflow: "hidden",
    position: "relative",
    height: 0,
    width: "100%",
  },
  content: {
    bottom: 0,
    height: "100%",
    left: 0,
    position: "absolute",
    top: 0,
    width: "100%",
  },
});
