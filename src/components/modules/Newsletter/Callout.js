// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { Text } from "components/primitives";

const COPY = {
  HEADLINE: `Sign up to our newsletter`,
  SUB_HEAD: `Just enter your email and stay updated`,
};

class Callout extends PureComponent {
  render() {
    return (
      <>
        <View>
          <Text style={[styles.title]}>{COPY.HEADLINE}</Text>
        </View>
        <View>
          <Text style={[styles.instructions]}>{COPY.SUB_HEAD}</Text>
        </View>
      </>
    );
  }
}

export default Callout;

const styles = StyleSheet.create({
  title: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "600",
  },
  instructions: {
    color: "white",
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "300",
  },
});
