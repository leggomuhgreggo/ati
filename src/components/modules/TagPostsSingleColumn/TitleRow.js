// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle, ModuleBox } from "components/modules";
import { LeaderBoard } from "components/ads";

import { Container, Text } from "components/primitives";

type Props = {
  color: string,
  title: string,
  link: string,
};

class TitleRow extends PureComponent<Props> {
  render() {
    const { color, title, link } = this.props;
    return (
      <View style={styles.titleRow}>
        <View style={styles.titleWrap}>
          <ModuleTitle color={color}>
            <Text>{title}</Text>
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
