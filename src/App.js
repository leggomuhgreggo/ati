// @flow

import React, { Component } from "react";
import { Text } from "react-native";
import MostRecent from "./components/modules/MostRecent";
import AppWrap from "./components/AppWrap";
import { POST_CATEGORIES } from "./constants";

const DATA = [
  {
    title: "Smoke Weed every Day",
    category: POST_CATEGORIES.MYSTERY,
    uri: "#",
    imageSrc: "http://fillmurray.com/1397/1091",
    id: "12",
  },
  {
    title: "Smoke Weed every Day",
    category: POST_CATEGORIES.MYSTERY,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "123",
  },
  {
    title: "Smoke Weed every Day",
    category: POST_CATEGORIES.WEIRD,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "123asfas4",
  },
  {
    title: "Smoke Weed every Day",
    category: POST_CATEGORIES.BAD_NEWS,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "12asdf34",
  },
  {
    title: "Smoke Weed every Day",
    category: POST_CATEGORIES.BELIEVE_IT,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "1affeg234",
  },
];

class App extends Component {
  render() {
    return (
      <AppWrap>
        <MostRecent posts={DATA} />
        <Text>To get started, edit and save to reload.</Text>
      </AppWrap>
    );
  }
}

export default App;
