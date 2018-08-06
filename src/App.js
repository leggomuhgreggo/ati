// @flow

import React, { PureComponent, Fragment } from "react";
import PageSections from "PageFactory";
import { AppWrap, Header, Main } from "./components/general";

import { getSectionData, getPostArray } from "data.js";
// const.

import { SECTION_TYPES } from "constants/index.js";

const getSpacingVariants = sectionTypeArray =>
  Object.values(sectionTypeArray).reduce((acc, value, index, array) => {
    return [...acc, { type: value }];
  }, []);

const data = getSpacingVariants(SECTION_TYPES);
console.log({ data });

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
