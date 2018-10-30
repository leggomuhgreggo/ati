// @flow

import React, { PureComponent } from "react";
import Carousel from "nuka-carousel";

import Arrow from "./Arrow";
import Slide from "./Slide";

type Props = {
  posts: any,
  isDesktop: boolean,
};

const SPACE_BETWEEN_SLIDES = {
  MOBILE: 10,
  DESKTOP: 30,
};

class Instagram extends PureComponent<Props> {
  configLg = {
    slidesToShow: 3,
    slidesToScroll: 3,
    wrapAround: true,
    heightMode: "first",
    renderBottomCenterControls: () => {},
    renderCenterLeftControls: props => <Arrow dir="prev" {...props} />,
    renderCenterRightControls: props => <Arrow dir="next" {...props} />,
    cellSpacing: SPACE_BETWEEN_SLIDES.DESKTOP,
  };

  configSm = {
    frameOverflow: "visible",
    slidesToShow: 1,
    slidesToScroll: 1,
    wrapAround: true,
    heightMode: "first",
    renderBottomCenterControls: () => {},
    renderCenterLeftControls: () => {},
    renderCenterRightControls: () => {},
    cellSpacing: SPACE_BETWEEN_SLIDES.MOBILE,
  };
  render() {
    const { posts, isDesktop } = this.props;

    return (
      posts && (
        <Carousel {...(isDesktop ? this.configLg : this.configSm)}>
          {posts.map(({ id, ...post }, index) => (
            <Slide key={`slide-${index}`} isDesktop={isDesktop} {...post} />
          ))}
        </Carousel>
      )
    );
  }
}

export default Instagram;
