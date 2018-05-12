// @flow

import React, { PureComponent } from "react";

import { Image } from "components/primitives";

class PostImage extends PureComponent {
  render() {
    const { imageSrc } = this.props;
    return <Image source={{ uri: imageSrc, width: 1397, height: 1091 }} />;
  }
}

export default PostImage;
