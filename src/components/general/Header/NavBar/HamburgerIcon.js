import React from "react";
import { StyleSheet, View } from "react-native";
import { FaBars } from "react-icons/fa";

import { Text } from "components/primitives";

const HamburgerIcon = ({ onClick }) => (
  <View accessibilityRole="button" onClick={onClick} style={styles.button}>
    <FaBars fill="white" />
  </View>
);

export default HamburgerIcon;

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 50,
    alignItems: "center",
    justifyContent: "center",
  },
  text: { color: "white" },
});
