// @flow

import React, { Component } from "react";

import {
  MostRecent,
  TagPostsSingleColumn,
  Newsletter,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { LeaderBoard } from "./components/ads";
import { Container, FullWidthSection } from "components/primitives";

import DATA from "data.js";

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />

        <Main>
          <FullWidthSection spacer={30}>
            <Container style={{ alignItems: "center" }} type="content">
              <LeaderBoard />
            </Container>
          </FullWidthSection>

          <FullWidthSection spacer={30}>
            <Container type="content">
              <TagPostsSingleColumn data={DATA} />
            </Container>
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
