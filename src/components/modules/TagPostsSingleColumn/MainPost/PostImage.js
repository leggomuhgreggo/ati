// @flow

import React, { Component } from "react";

import { Image } from "components/primitives";

class PostImage extends Component {
  render() {
    const { imageSrc } = this.props;
    return (
      <Image
        source={{
          uri: imageSrc,
          width: 2218,
          height: 1090,
        }}
      />
    );
  }
}

export default PostImage;
