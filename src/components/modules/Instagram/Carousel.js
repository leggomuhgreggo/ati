import React, { PureComponent } from "react";
// import { StyleSheet } from "react-native";
import Carousel from "nuka-carousel";

import Arrow from "./Arrow";
import Slide from "./Slide";

// import { Responsive } from "components/utils";
// import { BREAKPOINTS } from "constants/index";

class Instagram extends PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <Carousel
        slidesToShow={3}
        slidesToScroll={3}
        wrapAround
        heightMode="first"
        renderBottomCenterControls={() => {}}
        renderCenterLeftControls={props => <Arrow dir="prev" {...props} />}
        renderCenterRightControls={props => <Arrow dir="next" {...props} />}
        cellSpacing={30}
      >
        {posts.map(({ id, ...post }, i) => <Slide key={id} {...post} />)}
      </Carousel>
    );
  }
}

export default Instagram;
