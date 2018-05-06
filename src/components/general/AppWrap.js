// @flow

import React, { Component } from "react";

import {
  Platform,
  StatusBar,
  KeyboardAvoidingView,
  StyleSheet,
  SafeAreaView,
} from "react-native";
import { COLOR_MAP } from "constants.js";

import type { Node } from "react";

type Props = {
  children: Node,
};
class AppWrap extends Component<Props> {
  render() {
    return (
      <SafeAreaView style={styles.root}>
        <StatusBar backgroundColor={"black"} barStyle="light-content" />

        <KeyboardAvoidingView
          style={styles.keyboardAvoidWrap}
          behavior="padding"
        >
          {this.props.children}
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  }
}

export default AppWrap;

const styles = StyleSheet.create({
  root: {
    backgroundColor: COLOR_MAP.SITE_BG,
    position: "absolute",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    height: Platform.OS === "web" ? "100vh" : "100%",
    width: "100%",
  },
  keyboardAvoidWrap: {
    flex: 1,
    marginTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
  },
});
