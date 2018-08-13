// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { COLOR_MAP } from "constants/index";
import { Pattern } from "components/modules";
import { Ratio, Text, Row } from "components/primitives";

type Props = {
  patternColor: $Values<typeof COLOR_MAP>,
  title: string,
};

class ModuleTitle extends PureComponent<Props> {
  render() {
    const { patternColor } = this.props;
    return (
      <Pattern color={patternColor}>
        <Ratio ratio="1:1">
          <View
            style={[
              styles.colorBackground,
              { padding: 30, backgroundColor: patternColor },
            ]}
          >
            <Row>
              <Text style={{ color: "white" }} size={1}>
                Symbol
              </Text>
            </Row>
            <Row>
              <Text style={{ color: "white" }} size={2}>
                Trending News
              </Text>
            </Row>
          </View>
        </Ratio>
      </Pattern>
    );
  }
}

export default ModuleTitle;

const styles = StyleSheet.create({
  colorBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
});
