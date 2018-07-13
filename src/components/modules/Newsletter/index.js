// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View, Dimensions } from "react-native";

import { Container, Image } from "components/primitives";
import Callout from "./Callout";
import SignUp from "./SignUp";

import { COLOR_MAP } from "constants.js";

type Props = {};

const BREAKPOINT = 970;

class Newsletter extends PureComponent<Props> {
  state = Dimensions.get("window");

  handler = dims => this.setState(dims);

  componentWillMount() {
    Dimensions.addEventListener("change", this.handler);
  }

  componentWillUnmount() {
    Dimensions.removeEventListener("change", this.handler);
  }
  render() {
    const { width } = Dimensions.get("window");

    const containerStyles =
      width > BREAKPOINT ? styles.container : { paddingVertical: 30 };

    return (
      <View style={styles.wrap}>
        <Container
          type="content"
          style={[
            width > BREAKPOINT
              ? styles.container
              : { paddingVertical: 30, width: 448, maxWidth: "100%" },
          ]}
        >
          <View
            style={[
              styles.column,
              width > BREAKPOINT
                ? {
                    justifyContent: "flex-end",
                    alignItems: "flex-end",
                    paddingTop: "5%",
                  }
                : { alignItems: "center" },
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
            <Callout style={[styles.callout]} />
            <SignUp />
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
