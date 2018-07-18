// @flow

import React, { PureComponent, Fragment } from "react";

import {
  MostRecent,
  TagPostsSingleColumn,
  Instagram,
  // Newsletter,
  // Trending,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { ResponsiveLeaderboard as Leaderboard } from "./components/ads";
import { Section } from "components/primitives";

import createLockFunction from "utils/lock";

import { Responsive } from "components/utils";
import { getSectionData, getPostArray } from "data.js";
import { THEME_SPACING } from "constants.js";

import { Image } from "components/primitives";
// createLockFunction({ min, max })(screenWidth)
class App extends PureComponent {
  render() {
    return (
      <AppWrap>
        <Header />
        <Main>
          <Responsive>
            {({ width }) => {
              const marginBig = createLockFunction({
                min: THEME_SPACING.SECTION_SPACING.SM,
                max: THEME_SPACING.SECTION_SPACING.LG,
              })(width);
              const marginSmall = THEME_SPACING.SECTION_SPACING.SM;

              return (
                <Fragment>
                  <Section style={{ marginTop: marginSmall }}>
                    <Leaderboard />
                  </Section>

                  <Section style={{ marginTop: marginSmall }}>
                    <MostRecent posts={getPostArray(5)} />
                  </Section>

                  <Section style={{ marginTop: marginBig }}>
                    <TagPostsSingleColumn order={1} data={getSectionData(5)} />
                  </Section>

                  <Section style={{ marginTop: marginBig }}>
                    <Instagram data={getPostArray(9)} />
                  </Section>
                </Fragment>
              );
            }}
          </Responsive>
        </Main>
      </AppWrap>
    );
  }
}

export default App;
