// @flow

import React, { PureComponent, Fragment } from "react";
import { View, StyleSheet } from "react-native";

import { ModuleTitle } from "components/modules";
import { ResponsiveLeaderboard } from "components/ads";

import { Row } from "components/primitives";

import { SECTION_SPACERS, SECTION_SPACING_VARIANTS } from "constants/index";

type Props = {
  patternColor: string,
  title: string,
  link: string,
  titleTemplate: string,
  isDesktop: boolean,
};

class TitleRow extends PureComponent<Props> {
  renderMobile = () => {
    return (
      <Fragment>
        <Row style={{ alignItems: "center" }}>
          <ResponsiveLeaderboard />
        </Row>
        <Row
          style={{
            marginTop: SECTION_SPACERS[SECTION_SPACING_VARIANTS.LARGE],
            alignItems: "center",
            paddingHorizontal: 40,
          }}
        >
          {this.renderTitle()}
        </Row>
      </Fragment>
    );
  };
  renderDesktop = () => {
    return (
      <View style={styles.titleRow}>
        <View style={styles.titleWrap}>{this.renderTitle()}</View>

        <View style={{ flexShrink: 0 }}>
          <ResponsiveLeaderboard />
        </View>
      </View>
    );
  };

  renderTitle = () => {
    const { link, title, patternColor, titleTemplate } = this.props;
    return (
      <View style={{ width: "100%" }} accessibilityRole="link" href={link}>
        <ModuleTitle
          title={title}
          template={titleTemplate}
          patternColor={patternColor}
          style={{ minHeight: 110, justifyContent: "center" }}
        />
      </View>
    );
  };
  render() {
    const { isDesktop } = this.props;
    return isDesktop ? this.renderDesktop() : this.renderMobile();
  }
}

export default TitleRow;

const styles = StyleSheet.create({
  titleRow: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    width: "100%",
  },
  titleWrap: {
    flexGrow: 1,
    flexShrink: 1,
    marginRight: 30,
  },
});
