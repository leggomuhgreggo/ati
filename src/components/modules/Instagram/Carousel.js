import React, { PureComponent } from "react";
import Carousel from "nuka-carousel";

import Arrow from "./Arrow";
import Slide from "./Slide";

class Instagram extends PureComponent {
  configLg = {
    slidesToShow: 3,
    slidesToScroll: 3,
    wrapAround: true,
    heightMode: "first",
    renderBottomCenterControls: () => {},
    renderCenterLeftControls: props => <Arrow dir="prev" {...props} />,
    renderCenterRightControls: props => <Arrow dir="next" {...props} />,
    cellSpacing: 30,
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
    cellSpacing: 10,
  };
  render() {
    const { posts, isDesktop } = this.props;

    return (
      <Carousel {...(isDesktop ? this.configLg : this.configSm)}>
        {posts.map(({ id, ...post }, i) => <Slide key={id} {...post} />)}
      </Carousel>
    );
  }
}

export default Instagram;
