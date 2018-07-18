// @flow

import React, { PureComponent } from "react";

import {
  TagPostsSingleColumn,
  MostRecent,
  Newsletter,
  Trending,
  Instagram,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { Leaderboard } from "./components/ads";
import { Row } from "components/primitives";

import { getSectionData, getPostArray } from "data.js";

class App extends PureComponent {
  render() {
    return (
      <AppWrap>
        <Header />

        <Main>
          <Section style={{ marginTop: 30 }}>
            <Leaderboard />
          </Section>

          <Section style={{ marginTop: 30 }}>
            <MostRecent posts={getPostArray(5)} />
          </Section>

          <Section style={{ marginTop: 70 }}>
            <TagPostsSingleColumn order={1} data={getSectionData(5)} />
          </Section>

          <Section style={{ marginTop: 70 }}>
            <Newsletter />
          </Section>

          <Section style={{ marginTop: 70 }}>
            <Trending data={getSectionData(9)} />
          </Section>

          <Section style={{ marginTop: 70 }}>
            <TagPostsSingleColumn order={2} data={getSectionData(5)} />
          </Section>

          <Section>
            <Instagram data={getPostArray(9)} />
          </Section>

          <Section>
            <Header />
          </Section>
        </Main>
      </AppWrap>
    );
  }
}

export default App;

const Section = ({ children, style }) => (
  <Row style={[{ alignItems: "center", marginTop: 100 }, style]}>
    {children}
  </Row>
);
