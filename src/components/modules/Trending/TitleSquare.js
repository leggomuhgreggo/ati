// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet, Image } from "react-native";

import { COLOR_MAP } from "constants/index";
import { Pattern } from "components/modules";
import { Ratio, Text, Row } from "components/primitives";
import TrendingLine from "assets/images/trending-line.svg";

type Props = {
  patternColor: $Values<typeof COLOR_MAP>,
  title: string,
};

class TitleSquare extends PureComponent<Props> {
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
              <Image
                style={{ width: 45, height: 27 }}
                source={{ uri: TrendingLine }}
              />
            </Row>
            <Row style={{ marginTop: 20 }}>
              <Text style={styles.text}>Trending News</Text>
            </Row>
          </View>
        </Ratio>
      </Pattern>
    );
  }
}

export default TitleSquare;

const styles = StyleSheet.create({
  colorBackground: {
    width: "100%",
    height: "100%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  text: {
    lineHeight: 37,
    fontSize: 40,
    color: "white",
    fontWeight: "600",
  },
});
