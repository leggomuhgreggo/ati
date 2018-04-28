// @flow

import React, { Component } from "react";
import { View, StyleSheet } from "react-native";

import PostTitle from "./PostTitle";
import CategoryLabel from "./CategoryLabel";

import { LABEL_HEIGHT } from "./constants";

type TitleProps = {
  title: string,
};

class PostDetails extends Component<TitleProps> {
  render() {
    const { title, category } = this.props;
    return (
      <View style={styles.detailsWrap}>
        <View style={styles.detailsInner}>
          <CategoryLabel style={styles.labelPosition} category={category} />
          <PostTitle title={title} />
        </View>
      </View>
    );
  }
}

export default PostDetails;

const styles = StyleSheet.create({
  detailsWrap: {
    padding: 20,
  },
  detailsInner: {
    position: "relative",
  },
  labelPosition: {
    position: "absolute",
    top: 0,
    left: 0,
    transform: [
      {
        translateY: -LABEL_HEIGHT,
      },
    ],
  },
});
