// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";

import { Container } from "components/primitives";

import Illustration from "./Illustration";
import Callout from "./Callout";

import { COLOR_MAP } from "constants.js";

type Props = {};

class Newsletter extends PureComponent<Props> {
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
  },
  column: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  illustration: {
    backgroundPosition: "right",
    justifyContent: "flex-end",
  },
  callout: {},
});
