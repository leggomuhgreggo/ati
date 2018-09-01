import React, { PureComponent } from "react";
import { Text, View, StyleSheet } from "react-native";
import InstagramIcon from "react-icons/lib/fa/instagram";
import { COLOR_MAP } from "constants/index";

const { VERMILION } = COLOR_MAP;

class InstagramButton extends PureComponent {
  render() {
    return (
      <View style={styles.button}>
        <InstagramIcon
          style={{
            marginRight: 10,
            color: "white",
          }}
        />
        <Text style={styles.text}>Follow Us</Text>
      </View>
    );
  }
}

export default InstagramButton;

const styles = StyleSheet.create({
  button: {
    backgroundColor: VERMILION,
    padding: 10,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "white",
  },
});
