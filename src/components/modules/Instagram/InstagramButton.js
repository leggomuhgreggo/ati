import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import InstagramIcon from "react-icons/lib/fa/instagram";
import { COLOR_MAP } from "constants/index";

class InstagramButton extends PureComponent {
  render() {
    return (
      <View style={styles.button}>
        <InstagramIcon fill="white" size={18} />
        <Text style={styles.text}>FOLLOW US</Text>
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
