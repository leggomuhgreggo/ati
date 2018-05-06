// @flow

import React, { Component } from "react";
import { StyleSheet, View, Image } from "react-native";

import NewsletterImg from "./newsletter.png";

const Illustration = ({ style }) => (
  <Image
    style={style}
    resizeMode="contain"
    source={{ uri: NewsletterImg, width: "100%", height: "100%" }}
  />
);

export default Illustration;
