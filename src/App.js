// @flow

import React, { PureComponent } from "react";
import PageSections from "PageFactory";
import { AppWrap, Header, Footer, Main } from "./components/general";

type Props = {};

class App extends PureComponent<Props> {
  render() {
    const data =
      process.env.NODE_ENV &&
      process.env.NODE_ENV.toLowerCase().startsWith("dev")
        ? require("./data").data
        : window.fp_data;

    if (!data) {
      throw new Error("cannot load post data");
    }

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
