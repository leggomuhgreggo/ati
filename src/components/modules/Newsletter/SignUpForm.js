// @flow

import React, { PureComponent } from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

import { Text } from "components/primitives";

import { FaCheckCircle, FaExclamationTriangle } from "react-icons/fa";

import Callout from "./Callout";
import EmailInput from "./EmailInput";
import SubmitButton from "./SubmitButton";

import { subscribe } from "./subscribe";

import { ASYNC_STATES } from "constants/index";

type AsyncStats = $Values<typeof ASYNC_STATES>;

type Props = {};
type State = {
  submissionStatus: AsyncStats,
  email: string,
};

const COPY = {
  SUCCESS: "Thank you for subscribing to our newsletter!",
  ERROR:
    "There was an error subscribing to the newsletter. Please try again later.",
};

class SignUpForm extends PureComponent<Props, State> {
  state = {
    email: "",
    submissionStatus: ASYNC_STATES.DEFAULT,
  };

  setEmail = (email: string) => this.setState({ email });

  handleSubmit = async () => {
    const { email } = this.state;
    if (!email) {
      return;
    }

    this.setState({ submissionStatus: ASYNC_STATES.LOADING });

    const { status } = await subscribe(email);

    this.setState({
      submissionStatus:
        status === 200 ? ASYNC_STATES.SUCCESS : ASYNC_STATES.ERROR,
    });
  };

  renderLoading = () => <ActivityIndicator size="large" color="white" />;

  renderSuccess = () => (
    <Text style={[styles.successMsg]}>
      <FaCheckCircle />
      {COPY.SUCCESS}
    </Text>
  );

  renderError = () => (
    <Text style={[styles.errorMsg]}>
      <FaExclamationTriangle />
      {COPY.ERROR}
    </Text>
  );

  renderForm = () => {
    const { email } = this.state;

    return (
      <View accessibilityRole="form">
        <Callout />
        <View style={styles.signupWrap}>
          <EmailInput value={email} onChangeText={this.setEmail} />
          <SubmitButton onPress={this.handleSubmit} />
        </View>
      </View>
    );
  };

  renderBySubmissionStatus = (submissionStatus: AsyncStats) => {
    const MAP = {
      [ASYNC_STATES.DEFAULT]: this.renderForm(),
      [ASYNC_STATES.LOADING]: this.renderLoading(),
      [ASYNC_STATES.SUCCESS]: this.renderSuccess(),
      [ASYNC_STATES.ERROR]: this.renderError(),
    };
    return MAP[submissionStatus];
  };

  render() {
    const { submissionStatus } = this.state;

    return this.renderBySubmissionStatus(submissionStatus);
  }
}

export default SignUpForm;

const styles = StyleSheet.create({
  signupWrap: {
    marginTop: 20,
    position: "relative",
  },
  errorMsg: {
    color: "white",
    fontSize: 30,
    lineHeight: 40,
    fontWeight: "600",
  },
  successMsg: {
    color: "white",
    fontSize: 24,
    lineHeight: 31,
    fontWeight: "300",
  },
});
