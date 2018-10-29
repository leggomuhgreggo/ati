import React from "react";
import { StyleSheet } from "react-native";
import { Text } from "components/primitives";

const Logo = () => <Text style={[styles.headerText]}>ati</Text>;

export default Logo;

const styles = StyleSheet.create({
  headerText: {
    color: "white",
  },
});
