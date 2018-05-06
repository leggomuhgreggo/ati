// @flow

import React, { Component } from "react";

import { MostRecent, TagSingleCol, Newsletter } from "./components/modules";
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

          <Row>
            <Container type="content">
              <TagSingleCol />
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
            <Header />
          </Row>
        </Main>
      </AppWrap>
    );
  }
}

export default App;
