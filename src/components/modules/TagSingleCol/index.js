// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle, ModuleBox } from "components/modules";
import { LeaderBoard } from "components/ads";

import { Container, Text } from "components/primitives";

class TagSection extends Component<Props> {
  render() {
    return (
      <Container>
        <View style={styles.titleRow}>
          <View style={styles.titleWrap}>
            <ModuleTitle>
              <Text>Hey</Text>
            </ModuleTitle>
          </View>
          <View>
            <LeaderBoard />
          </View>
        </View>
      </Container>
    );
  }
}

export default TagSection;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
  },
  titleWrap: {
    // display: "flex",
    flexGrow: 1,
    marginRight: 30,
    // minWidth: "100%",
    // flexShrink: 0,
  },
});
