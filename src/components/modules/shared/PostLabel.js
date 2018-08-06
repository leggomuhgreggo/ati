// @flow

import React, { PureComponent } from "react";
import { View } from "react-native";

import { Text } from "components/primitives";
// import type { Categories } from "components/modules";
import type { StyleObj } from "react-native/Libraries/StyleSheet/StyleSheetTypes";

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
            fontSize: 11,
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
            fontWeight: 600,
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
