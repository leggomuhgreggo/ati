// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Text, Image } from "components/primitives";

import { COLOR_MAP } from "constants.js";

import NewsletterImg from "./newsletter.png";

const COPY = {
  HEADLINE: `Sign up to our newsletter`,
  SUB_HEAD: `Just enter your email and stay updated`,
};

const Illustration = ({ style }) => (
  <View style={style}>
    <Image style={style} source={{ uri: NewsletterImg }} />
  </View>
);

const Callout = ({ style }) => (
  <View style={style}>
    <View>
      <Text sizeRange={[28, 40]} style={[styles.calloutText]}>
        {COPY.HEADLINE}
      </Text>
    </View>
    <View>
      <Text sizeRange={[16, 24]} style={[styles.calloutText]}>
        {COPY.SUB_HEAD}
      </Text>
    </View>
  </View>
);

type Props = {};

class Newsletter extends Component<Props> {
  render() {
    return (
      <View style={styles.wrap}>
        <Illustration style={styles.illustration} />
        <Callout style={styles.illustration} />
      </View>
    );
  }
}

export default Newsletter;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLOR_MAP.BLUE,
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  illustration: {
    width: "50%",
  },
  calloutText: {
    color: "white",
  },
});
