// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostImage } from "components/modules";
import { Text } from "components/primitives";
import SmallPost from "./SmallPost";

type Props = {
  title: string,
  categoryName: string,
  categoryColor: string,
  link: string,
  isDesktop: boolean,
  imageSrc: string,
};

class MediumPost extends PureComponent<Props> {
  static defaultProps = {
    style: {},
  };

  render() {
    const { imageSrc, ...rest } = this.props;
    return (
      <View>
        <PostImage width={300} height={250} imageSrc={imageSrc} />
        <View style={{ marginTop: 15, justifyContent: "space-between" }}>
          <SmallPost {...rest} />
          <View style={styles.postLine} />
        </View>
      </View>
    );
  }
}

export default MediumPost;

const styles = StyleSheet.create({
  postLine: {
    marginTop: 18,
    backgroundColor: "black",
    height: 2,
    width: "100%",
  },
});
