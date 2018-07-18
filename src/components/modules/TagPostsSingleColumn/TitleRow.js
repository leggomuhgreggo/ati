// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle } from "components/modules";
import { Leaderboard } from "components/ads";

import { Text } from "components/primitives";

type Props = {
  patternColor: string,
  title: string,
  link: string,
};

class TitleRow extends PureComponent<Props> {
  render() {
    const { patternColor, title } = this.props;
    return (
      <View style={styles.titleRow}>
        <View style={styles.titleWrap}>
          <ModuleTitle
            style={{ height: 110, justifyContent: "center" }}
            patternColor={patternColor}
          >
            <Text>{title}</Text>
          </ModuleTitle>
        </View>

        <View>
          <Leaderboard />
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
