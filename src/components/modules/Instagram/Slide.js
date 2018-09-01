import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";
import { Text, Image } from "components/primitives";

class InstagramSlide extends PureComponent {
  render() {
    const { imageSrc, title } = this.props;
    return (
      <View style={styles.wrap}>
        <Image
          style={styles.image}
          source={{
            uri: imageSrc,
          }}
        />

        <View style={styles.textBox}>
          <Text style={styles.text}>{title}</Text>
        </View>
      </View>
    );
  }
}

export default InstagramSlide;

const styles = StyleSheet.create({
  wrap: {
    flexDirection: "row",
    flexWrap: "wrap",
    flexShrink: 3,
    alignSelf: "flex-start",
  },
  image: {
    height: 310,
    width: 310,
  },
  textBox: {
    backgroundColor: "black",
    padding: 10,
    width: "100%",
    height: 110,
  },
  text: {
    color: "white",
  },
});
