// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

type Props = {
  overflowHidden?: boolean,
  ratio?: string,
  renderComponent?: any,
  children: any,
};

class Ratio extends PureComponent<Props> {
  static defaultProps = {
    overflowHidden: true,
    ratio: "1.88:1",
  };

  getRatioPercentage = (ratio: string): string => {
    const [width, height] = ratio.split(":");

    return height / width * 100 + "%";
  };

  getPaddingBottom = (): string => {
    const { ratio } = this.props;
    return this.getRatioPercentage(ratio);
  };

  render() {
    const { children, renderComponent } = this.props;
    return (
      <View>
        <View style={[styles.wrap, { paddingBottom: this.getPaddingBottom() }]}>
          {renderComponent ? (
            renderComponent
          ) : (
            <View style={styles.content}>{children}</View>
          )}
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
