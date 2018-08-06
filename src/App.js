// @flow

import React, { PureComponent } from "react";
import PageSections from "PageFactory";
import { AppWrap, Header, Main } from "./components/general";

import { data } from "data.js";

class App extends PureComponent {
  render() {
    return (
      <AppWrap>
        <Header />
        <Main>
          <PageSections data={data} />
        </Main>
      </AppWrap>
    );
  }
}

export default App;
