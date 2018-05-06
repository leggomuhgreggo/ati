// @flow

import React, { Component } from "react";
import { StyleSheet, View } from "react-native";

import { Image } from "components/primitives";

import NewsletterImg from "./newsletter.png";

const Illustration = ({ style }) => (
  <Image style={style} resizeMode="contain" source={{ uri: NewsletterImg }} />
);

export default Illustration;
