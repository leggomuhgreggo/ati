// @flow

import React, { PureComponent, Fragment } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle } from "components/modules";
import { ResponsiveLeaderboard } from "components/ads";

import { Text, Row } from "components/primitives";

import { Responsive } from "components/utils";

import {
  BREAKPOINTS,
  SECTION_SPACERS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";
// import createLockFunction from "utils/lock";

type Props = {
  patternColor: string,
  title: string,
  link: string,
};

class TitleRow extends PureComponent<Props> {
  renderMobile = width => {
    const { patternColor, title, link } = this.props;
    return (
      <Fragment>
        <Row style={{ alignItems: "center" }}>
          <ResponsiveLeaderboard />
        </Row>
        <Row
          style={{
            marginTop: SECTION_SPACERS[SECTION_SPACING_VARIANTS.LARGE],
            alignItems: "center",
          }}
        >
          <View accessibilityRole="link" href={link}>
            <ModuleTitle
              style={{ height: 110, justifyContent: "center", width: 300 }}
              patternColor={patternColor}
            >
              <Text>{title}</Text>
            </ModuleTitle>
          </View>
        </Row>
      </Fragment>
    );
  };
  renderDesktop = () => {
    const { patternColor, title, link } = this.props;
    return (
      <View style={styles.titleRow}>
        <View style={styles.titleWrap} accessibilityRole="link" href={link}>
          <ModuleTitle
            style={{ height: 110, justifyContent: "center" }}
            patternColor={patternColor}
          >
            <Text>{title}</Text>
          </ModuleTitle>
        </View>

        <View>
          <ResponsiveLeaderboard />
        </View>
      </View>
    );
  };
  render() {
    return (
      <Responsive>
        {({ minWidth, width }) => {
          const isDesktop = minWidth(BREAKPOINTS.LG);
          return isDesktop ? this.renderDesktop() : this.renderMobile(width);
        }}
      </Responsive>
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
