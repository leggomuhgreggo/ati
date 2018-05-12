// @flow

import React, { Component } from "react";

import {
  MostRecent,
  TagPostsSingleColumn,
  Newsletter,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { LeaderBoard } from "./components/ads";
import { FullWidthSection } from "components/primitives";

import { POST_LIST, TAG_SECTION } from "data.js";

// console.log(POST_LIST);

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />

        <Main>
          <FullWidthSection spacer={30}>
            <LeaderBoard />
          </FullWidthSection>

          <FullWidthSection spacer={30}>
            <TagPostsSingleColumn data={TAG_SECTION} />
          </FullWidthSection>

          <FullWidthSection>
            <Header />
          </FullWidthSection>
        </Main>
      </AppWrap>
    );
  }
}

export default App;
