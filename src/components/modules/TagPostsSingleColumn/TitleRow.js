// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle, ModuleBox } from "components/modules";
import { LeaderBoard } from "components/ads";

import { Container, Text } from "components/primitives";

class TitleRow extends Component<Props> {
  render() {
    return (
      <View style={styles.titleRow}>
        <View style={styles.titleWrap}>
          <ModuleTitle color="blue">
            <Text>History Uncovered</Text>
          </ModuleTitle>
        </View>
        <View>
          <LeaderBoard />
        </View>
      </View>
    );
  }
}

export default TitleRow;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrap: {
    flexGrow: 1,
    marginRight: 30,
  },
});
