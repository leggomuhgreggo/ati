// @flow

import React, { PureComponent } from "react";

import { Container, Grid, Row } from "components/primitives";

import {
  POST_COMPONENTS,
  GRID_COMPONENTS,
  getComposedComponents,
} from "./posts-helpers";

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

class Posts extends PureComponent {
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

    return (
      <Grid spacer={30}>{getComposedComponents(componentOrderMap, posts)}</Grid>
    );
  }
}

export default Posts;
