// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import {
  getMinAdDimensions,
  getIdFromGlobalAdRegistration,
  displayAd,
} from "./ad-utils";

type Props = {
  style?: RNW$Styles,
};

const MakeAdComponent = adType => {
  const minDimensionsForType = getMinAdDimensions(adType);

  return class Ad extends PureComponent<Props> {
    static defaultProps = {
      style: {},
    };

    adId = getIdFromGlobalAdRegistration(adType);

    componentDidMount = () => {
      displayAd(this.adId);
    };

    render() {
      const { style } = this.props;
      const emptyAdStyle = this.adId ? {} : styles.adPlaceholder;

      return (
        <View style={[minDimensionsForType, emptyAdStyle, style]}>
          <div id={this.adId} />
        </View>
      );
    }
  };
};

export default MakeAdComponent;

const styles = StyleSheet.create({
  adPlaceholder: {
    backgroundColor: "#ebebeb",
    borderColor: "#ddd",
    borderWidth: 1,
  },
});
