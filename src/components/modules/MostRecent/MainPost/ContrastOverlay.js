// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

class ContrastOverlay extends PureComponent {
  render() {
    return <View style={styles.overlay} />;
  }
}

export default ContrastOverlay;

const styles = StyleSheet.create({
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "60%",
    backgroundImage:
      "linear-gradient(to bottom,transparent 0,rgba(0,0,0,.02) 14%,rgba(0,0,0,.05) 23%,rgba(0,0,0,.18) 43%,rgba(0,0,0,.41) 62%,rgba(0,0,0,.8) 88%,rgba(0,0,0,.81) 90%,rgba(0,0,0,.9) 95%,rgba(0,0,0,.94) 100%)",
  },
});
