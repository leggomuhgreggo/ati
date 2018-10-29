import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { FaBars } from "react-icons/fa";

import { Text } from "components/primitives";

const HamburgerIcon = ({ onClick }) => (
  <TouchableOpacity style={styles.button}>
    <Text onClick={onClick} style={[styles.text]}>
      <FaBars />
    </Text>
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
