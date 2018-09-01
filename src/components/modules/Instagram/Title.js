import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";
import { COLOR_MAP } from "constants/index";

const { VERMILION } = COLOR_MAP;

class Title extends PureComponent {
  render() {
    return (
      <View>
        <Text>
          #ati on <Text style={styles.text}>Instagram</Text>
        </Text>
      </View>
    );
  }
}

export default Title;

const styles = StyleSheet.create({
  text: {
    color: VERMILION,
  },
});
