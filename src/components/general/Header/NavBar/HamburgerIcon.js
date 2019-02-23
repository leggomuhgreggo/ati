import React from "react";
import { StyleSheet, TouchableOpacity } from "react-native";
import { FaBars } from "react-icons/fa";

import { Text } from "components/primitives";

const HamburgerIcon = ({ onClick }) => (
  <TouchableOpacity onClick={onClick} style={styles.button}>
    <FaBars fill="white" />
  </TouchableOpacity>
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
