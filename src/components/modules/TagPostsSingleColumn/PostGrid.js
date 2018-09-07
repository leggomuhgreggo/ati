// @flow

import React, { PureComponent } from "react";

import { Grid } from "components/primitives";

import { GRID_COMPONENTS, getComposedComponents } from "./posts-helpers";

const ORDER_1 = [
  GRID_COMPONENTS.LG,
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.AD,
];

const ORDER_2 = [
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.AD,
  GRID_COMPONENTS.MD,
  GRID_COMPONENTS.LG,
];

type Props = {
  order: 1 | 2,
};

class PostGrid extends PureComponent<Props> {
  static defaultProps = {
    order: 1,
  };

  getComponentOrder = () => {
    const { order } = this.props;
    return order === 1 ? ORDER_1 : ORDER_2;
  };

  render() {
    const { posts } = this.props;
    const componentOrderMap = this.getComponentOrder();
    const postsArray = getComposedComponents(componentOrderMap, posts);

    // console.log(postsArray);

    return <Grid spacer={30}>{postsArray}</Grid>;
  }
}

export default PostGrid;
