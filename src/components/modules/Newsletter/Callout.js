// @flow

import React from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "components/primitives";

const COPY = {
  HEADLINE: `Sign up to our newsletter`,
  SUB_HEAD: `Just enter your email and stay updated`,
};

const Callout = ({ style }) => (
  <View style={style}>
    <View>
      <Text style={[styles.calloutText]}>{COPY.HEADLINE}</Text>
    </View>
    <View>
      <Text style={[styles.calloutText]}>{COPY.SUB_HEAD}</Text>
    </View>
  </View>
);

export default Callout;

const styles = StyleSheet.create({
  calloutText: {
    color: "white",
  },
});
