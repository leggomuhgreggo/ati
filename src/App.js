// @flow

import React, { PureComponent } from "react";

import {
  TagPostsSingleColumn,
  MostRecent,
  Newsletter,
} from "./components/modules";
import { AppWrap, Header, Main } from "./components/general";
import { LeaderBoard } from "./components/ads";
import { Row } from "components/primitives";

import { TAG_SECTION, POST_LIST } from "data.js";

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
            <MostRecent posts={POST_LIST} />
          </Section>

          <Section style={{ marginTop: 100 }}>
            <TagPostsSingleColumn order={1} data={TAG_SECTION} />
          </Section>

          <Section style={{ marginTop: 100 }}>
            <Newsletter />
          </Section>

          <Section style={{ marginTop: 100 }}>
            <TagPostsSingleColumn order={2} data={TAG_SECTION} />
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
