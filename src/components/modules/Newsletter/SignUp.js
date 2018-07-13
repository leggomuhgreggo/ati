// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Text } from "components/primitives";

type Props = {};

class SignUp extends PureComponent<Props> {
  render() {
    return (
      <View accessibilityRole="form" style={styles.inputWrap}>
        <TextInput style={styles.input} />
        <TouchableOpacity
          accessibilityRole="submit"
          accessibilityLabel={"Sign up for ATI newsletter"}
          accessible={true}
          style={styles.buttonWrap}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default SignUp;

const styles = StyleSheet.create({
  inputWrap: {
    marginTop: 30,
    position: "relative",
  },
  input: {
    backgroundColor: "white",
    height: 55,
  },
  buttonWrap: {
    padding: 5,
    position: "absolute",
    top: 0,
    right: 0,
    height: "100%",
  },
  button: {
    backgroundColor: "black",
    height: "100%",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
  },
  buttonText: {
    color: "white",
  },
});
