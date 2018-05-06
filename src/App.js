// @flow

import React, { Component } from "react";

import { MostRecent, TagSection, Newsletter } from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { LeaderBoard } from "./components/ads";
import { Container, Row } from "components/primitives";

import DATA from "data.js";

class App extends Component {
  render() {
    return (
      <AppWrap>
        <Header />

        <Main>
          <Row spacer={30}>
            <Container style={{ alignItems: "center" }} type="content">
              <LeaderBoard />
            </Container>
          </Row>

          <Row spacer={30}>
            <Container type="content">
              <MostRecent posts={DATA} />
            </Container>
          </Row>

          <Row>
            <Newsletter />
          </Row>

          <Row>
            <Container type="content">
              <TagSection />
            </Container>
          </Row>
          <Header />
        </Main>
      </AppWrap>
    );
  }
}

export default App;
