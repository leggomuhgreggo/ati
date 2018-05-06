// @flow

import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import { Text, Container } from "components/primitives";

import Illustration from "./Illustration";
import Callout from "./Callout";

import { COLOR_MAP } from "constants.js";

type Props = {};

class Newsletter extends Component<Props> {
  render() {
    return (
      <View style={styles.wrap}>
        <Container type="content" style={styles.container}>
          <View style={[styles.column]}>
            <Illustration style={styles.Illustration} />
          </View>
          <View style={styles.column}>
            <Callout style={styles.callout} />
          </View>
        </Container>
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
  },
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
    position: "realtive",
  },
  column: {
    width: "50%",
    height: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  illustration: {
    alignSelf: "flexEnd",
    width: "100%",
    height: "100%",
  },
  callout: {},
});