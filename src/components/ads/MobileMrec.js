// @flow

import { StyleSheet } from "react-native";
import { makeAdComponent } from "./Ad";
import { createMobileMrec } from "../../utils/ads";

const styles = StyleSheet.create({
  ad: {
    minWidth: 300,
    minHeight: 250,
  },
});

export default makeAdComponent(createMobileMrec, styles);
