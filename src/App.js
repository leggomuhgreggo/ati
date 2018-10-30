// @flow

import React, { PureComponent } from "react";
import PageSections from "PageFactory";
import { AppWrap, Header, Footer, Main } from "./components/general";

type Props = {};

class App extends PureComponent<Props> {
  render() {
    const data = window.fp_data;

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
