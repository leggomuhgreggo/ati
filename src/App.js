// @flow

import React, {
  PureComponent,
} from "../../../Library/Caches/typescript/2.9/node_modules/@types/react";

// import {
//   TagPostsSingleColumn,
//   MostRecent,
//   Newsletter,
//   Trending,
//   Instagram,
// } from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { ResponsiveLeaderboard as Leaderboard } from "./components/ads";
import { Section } from "components/primitives";

// import { Responsive } from "components/utils";
// import { BREAKPOINTS } from "constants.js";
// import { getSectionData, getPostArray } from "data.js";

import { Image } from "components/primitives";

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
            <Image width={375} height={250} />
          </Section>
        </Main>
      </AppWrap>
    );
  }
}

export default App;
