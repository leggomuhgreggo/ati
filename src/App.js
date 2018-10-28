// @flow

import React, { PureComponent } from "react";
import PageSections from "PageFactory";
import { AppWrap, Header, Footer, Main } from "./components/general";

import { data } from "data.js";
type Props = {};

class App extends PureComponent<Props> {
  render() {
    return (
      <AppWrap>
        <Header />
        <Main>
          <PageSections data={data} />
          <Footer />
        </Main>
      </AppWrap>
    );
  }
}

export default App;
