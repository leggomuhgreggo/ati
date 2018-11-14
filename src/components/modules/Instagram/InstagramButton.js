import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import { FaInstagram } from "react-icons/fa";
import { COLOR_MAP, ATI_INSTAGRAM_URL } from "constants/index";

const FOLLOW_STRING = "FOLLOW US";

class InstagramButton extends PureComponent {
  render() {
    return (
      <View
        style={styles.button}
        accessibilityRole="link"
        href={ATI_INSTAGRAM_URL}
        target="_blank"
      >
        <FaInstagram fill="white" size={18} />
        <Text style={styles.text}>{FOLLOW_STRING}</Text>
      </View>
    );
  }
}

export default InstagramButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: COLOR_MAP.VERMILION,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
    fontSize: 11,
    fontWeight: "400",
    marginLeft: 10,
    letterSpacing: 1,
  },
});
