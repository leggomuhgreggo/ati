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
          <View style={[styles.column, styles.illustration]}>
            <Illustration style={styles.illustration} />
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
    // width: "50%",
    // maxHeight: "90%",
    // height: "100%",
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
    // alignItems: "center",
  },
  illustration: {
    backgroundPosition: "right",
    // maxHeight: "90%",
    // alignContent: "flex-end",
    // alignItems: "flex-end",
    justifyContent: "flex-end",
    // width: "100%",
    // height: "80%",
  },
  callout: {},
});
