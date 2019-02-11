// @flow

import React, { PureComponent } from "react";
import { StyleSheet, View, TextInput, TouchableOpacity } from "react-native";
import { Text } from "components/primitives";

type Props = {
  signUp: () => void,
  email: string,
  setEmail: (email: string) => void,
};

class EmailInput extends PureComponent<Props> {
  render() {
    const { email, signUp, setEmail } = this.props;

    return (
      <View accessibilityRole="form">
        <TextInput
          style={styles.input}
          keyboardType="email-address"
          textContentType="emailAddress"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          accessibilityRole="submit"
          accessibilityLabel={"Sign up for ATI newsletter"}
          accessible={true}
          style={styles.buttonWrap}
          onPress={signUp}
        >
          <View style={styles.button}>
            <Text style={styles.buttonText}>Sign Up</Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  }
}

export default EmailInput;

const styles = StyleSheet.create({
  input: {
    backgroundColor: "white",
    height: 55,
    padding: 10,
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
