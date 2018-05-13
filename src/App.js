// @flow

import React, { PureComponent } from "react";

import { TagPostsSingleColumn } from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { LeaderBoard } from "./components/ads";
import { Row } from "components/primitives";

import { TAG_SECTION } from "data.js";

class App extends PureComponent {
  render() {
    return (
      <AppWrap>
        <Header />

        <Main>
          <Section style={{ marginTop: 30 }}>
            <LeaderBoard />
          </Section>

          <Section style={{ marginTop: 30 }}>
            <TagPostsSingleColumn data={TAG_SECTION} />
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
