// @flow

import React, { Component } from "react";
import { Text } from "react-native";
import MostRecent from "./components/modules/MostRecent";
import AppWrap from "./components/AppWrap";
import { POST_CATEGORIES } from "./constants";

const DATA = [
  {
    title:
      "Inside The Darvaza Gas Crater, Turkmenistanian’s Fiery Door To Hell",
    category: POST_CATEGORIES.MYSTERY,
    uri: "#",
    imageSrc: "http://fillmurray.com/1397/1091",
    id: "12",
  },
  {
    title:
      "Holly Bobo Met A Stranger For A Midnight Rendezvous, And Never Returned",
    category: POST_CATEGORIES.MYSTERY,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "123",
  },
  {
    title:
      "Meet Pedro Rodrigues Filho, The Real-Life “Dexter” — Serial Killer Of Other Criminals",
    category: POST_CATEGORIES.WEIRD,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "123asfas4",
  },
  {
    title: "Bad News Alert: Bacon Will Kill You As Fast As Cigarettes",
    category: POST_CATEGORIES.BAD_NEWS,
    uri: "#",
    imageSrc: "http://fillmurray.com/100/100",
    id: "12asdf34",
  },
  {
    title: "21 Photos Of André The Giant You Won’t Believe Aren’t Photoshopped",
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
