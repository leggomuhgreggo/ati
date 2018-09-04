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
          height: 20,
          paddingHorizontal: 6,
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: categoryColor,
        }}
      >
        <Text
          style={{
            fontSize: 12,
            lineHeight: 12,
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
            fontSize: 12,
            fontWeight: "600",
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
