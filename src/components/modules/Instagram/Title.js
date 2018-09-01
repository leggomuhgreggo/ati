import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import { COLOR_MAP } from "constants/index";

class Title extends PureComponent {
  renderInstagram = () => <Text style={styles.text}>Instagram</Text>;
  render() {
    const { isDesktop } = this.props;
    return (
      <View>
        {isDesktop ? (
          <Text serif style={styles.text}>
            #ati on{" "}
            <Text serif style={[styles.text, styles.instagram]}>
              instagram
            </Text>
          </Text>
        ) : (
          <Text style={styles.text}>#ati</Text>
        )}
      </View>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
  text: {
    fontSize: 40,
    fontWeight: "600",
  },
  instagram: {
    color: COLOR_MAP.VERMILION,
  },
});
