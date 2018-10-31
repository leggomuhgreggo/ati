// @flow

import { StyleSheet } from "react-native";
import { makeAdComponent } from "./Ad";
import { createLboard } from "../../utils/ads";

const styles = StyleSheet.create({
  ad: {
    width: 728,
    height: 90,
  },
});

export default makeAdComponent(createLboard, styles);
