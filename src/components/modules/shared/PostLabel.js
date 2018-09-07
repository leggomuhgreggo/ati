// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Text } from "components/primitives";

type Props = {
  fill: boolean,
  categoryName: string,
  categoryColor: string,
};

class PostLabel extends PureComponent<Props> {
  render() {
    const { fill, categoryColor, categoryName } = this.props;

    return fill ? (
      <View
        style={{
          height: 25,
          paddingHorizontal: 6,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: categoryColor,
        }}
      >
        <Text
          style={{
            fontSize: 11,
            lineHeight: 11,
            letterSpacing: 1,
            color: "white",
          }}
        >
          {categoryName.toUpperCase()}
        </Text>
      </View>
    ) : (
      <View>
        <Text
          style={{
            fontSize: 11,
            fontWeight: "600",
            letterSpacing: 1,
            color: categoryColor,
          }}
        >
          {categoryName.toUpperCase()}
        </Text>
      </View>
    );
  }
}

export default PostLabel;
