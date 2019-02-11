// @flow

import React, { PureComponent } from "react";
import { StyleSheet, TextInput } from "react-native";

type Props = {
  value: string,
  onChangeText: (email: string) => void,
};

class EmailInput extends PureComponent<Props> {
  render() {
    const { value, onChangeText } = this.props;

    return (
      <TextInput
        style={styles.input}
        keyboardType="email-address"
        textContentType="emailAddress"
        value={value}
        onChangeText={onChangeText}
      />
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
});
