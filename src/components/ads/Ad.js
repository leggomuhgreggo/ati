// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { displayAd } from "../../utils/ads";

type Props = {
  style?: RNW$Styles,
};

export const makeAdComponent = (createAd, styles) =>
  class Ad extends PureComponent<Props> {
    static defaultProps = {
      style: {},
    };

    constructor() {
      super();
      this.adId = createAd();
    }

    componentDidMount() {
      displayAd(this.adId);
    }

    render() {
      const { style } = this.props;

      const emptyAdStyle = this.adId
        ? {}
        : {
            backgroundColor: "#ebebeb",
            borderColor: "#ddd",
            borderWidth: 1,
          };

      return (
        <View style={[styles.ad, emptyAdStyle, style]}>
          <div id={this.adId} />
        </View>
      );
    }
  };
