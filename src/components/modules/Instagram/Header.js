import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import Title from "./Title";
import InstagramButton from "./InstagramButton";

class Header extends PureComponent {
  render() {
    return (
      <View style={styles.row}>
        <View>
          <Title />
        </View>

        <View>
          <InstagramButton />
        </View>
      </View>
    );
  }
}

export default Header;

const styles = StyleSheet.create({
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    marginBottom: 30,
  },
});
