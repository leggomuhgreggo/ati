// @flow

import React, { PureComponent, Fragment } from "react";

import {
  MostRecent,
  TagPostsSingleColumn,
  Instagram,
  Newsletter,
  Trending,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { ResponsiveLeaderboard as Leaderboard } from "./components/ads";
import { Section } from "components/primitives";

import { getSectionData, getPostArray } from "data.js";

class App extends PureComponent {
  render() {
    return (
      <AppWrap>
        <Header />
        <Main>
          <Section spacingTop="sm">
            <Leaderboard />
          </Section>

          <Section spacingTop="sm">
            <MostRecent posts={getPostArray(5)} />
          </Section>

          <Section spacingTop="lg">
            <TagPostsSingleColumn order={1} data={getSectionData(5)} />
          </Section>

          <Section spacingTop="lg">
            <Instagram data={getPostArray(9)} />
          </Section>

          <Section spacingTop="lg">
            <Newsletter />
          </Section>

          <Section spacingTop="lg">
            <Trending data={getSectionData(9)} />
          </Section>

          <Section spacingTop="lg">
            <TagPostsSingleColumn order={2} data={getSectionData(5)} />
          </Section>

          <Section spacingTop="lg">
            <Header />
          </Section>
        </Main>
      </AppWrap>
    );
  }
}

export default App;
