// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View } from "react-native";
import { Dimensions } from "react-native";

import { Container, Ratio, Image } from "components/primitives";
import Callout from "./Callout";

import { COLOR_MAP } from "constants.js";

type Props = {};

class Newsletter extends PureComponent<Props> {
  render() {
    return (
      <View style={styles.wrap}>
        <Container type="content" style={styles.container}>
          <View
            style={[
              styles.column,
              { justifyContent: "flex-end", alignItems: "flex-end" },
            ]}
          >
            <View style={styles.imageWrap}>
              <Image
                width={332}
                height={260}
                resizeMode="contain"
                source={{ uri: require("assets/images/newsletter.png") }}
              />
            </View>
          </View>
          <View style={styles.column}>
            <Callout style={styles.callout} />
          </View>
        </Container>
      </View>
    );
  }
}

export default Newsletter;

const styles = StyleSheet.create({
  wrap: {
    backgroundColor: COLOR_MAP.BLUE,
    width: "100%",
    height: 300,
    justifyContent: "center",
    alignItems: "center",
  },
  container: {
    flexDirection: "row",
    flexWrap: "nowrap",
  },
  imageWrap: {
    maxWidth: 332,
    width: "100%",
  },
  column: {
    flex: 1,
    paddingHorizontal: 20,
    justifyContent: "center",
  },
  callout: {},
});
