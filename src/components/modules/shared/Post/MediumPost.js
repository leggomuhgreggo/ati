// @flow

import React, { PureComponent, Fragment } from "react";
import { View, StyleSheet } from "react-native";

import { PostImage } from "components/modules";
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
      <Fragment>
        <PostImage width={300} height={250} imageSrc={imageSrc} />
        <View
          style={{
            marginTop: 15,
            justifyContent: "space-between",
            flexGrow: 1,
          }}
        >
          <SmallPost {...rest} />
          <View style={styles.postLine} />
        </View>
      </Fragment>
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
