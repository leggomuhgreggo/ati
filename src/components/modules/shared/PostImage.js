// @flow

import React, { PureComponent } from "react";

import { Image } from "components/primitives";

class PostImage extends PureComponent {
  render() {
    const { imageSrc, width, height } = this.props;
    return <Image width={width} height={height} uri={imageSrc} />;
  }
}

export default PostImage;
