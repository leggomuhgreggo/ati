// @flow

import React, { PureComponent } from "react";

import { Container, Grid, Row } from "components/primitives";
import { Mrec } from "components/ads";

import TitleRow from "./TitleRow";
import MainPost from "./MainPost";
import { getPostWrapComponents } from "./OverlappingPostsWrap";
import Post from "./Post";

const POST_COMPONENTS = {
  LG: Post,
  MD: Post,
};

const GRID_COMPONENTS = {
  ...POST_COMPONENTS,
  AD: Mrec,
};

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

    return <Grid>{getComposedComponents(componentOrderMap, posts)}</Grid>;
  }
}

export default Posts;

const makeConditionedMergeReducer = ({
  condition,
  handleTrue,
  handleFalse,
  handleFinal,
}) => (...args) => {
  const { 1: CurrentComonpent, 2: currentIndex, 3: array } = args;
  const isFinal = currentIndex === array.length - 1;

  const accCandidate = condition(CurrentComonpent)
    ? handleTrue(...args)
    : handleFalse(...args);

  return isFinal ? handleFinal(accCandidate) : accCandidate;
};

const isPostType = CurrentComponent =>
  Object.values(POST_COMPONENTS).includes(CurrentComponent);

const getComponentsFromAcc = ({ newComponentArray }) => newComponentArray;

const accNonPost = (accumulator, CurrentComponent, index) => {
  const { newComponentArray, postsHeap } = accumulator;
  return {
    newComponentArray: [...newComponentArray, <CurrentComponent key={index} />],
    postsHeap,
  };
};

const accPost = (accumulator, CurrentComponent) => {
  const {
    newComponentArray,
    postsHeap: [{ id, ...props }, ...restPosts],
  } = accumulator;
  return {
    newComponentArray: [
      ...newComponentArray,
      <CurrentComponent key={id} {...props} />,
    ],
    postsHeap: restPosts,
  };
};

const gridItemsReducerFunction = makeConditionedMergeReducer({
  condition: isPostType,
  handleTrue: accPost,
  handleFalse: accNonPost,
  handleFinal: getComponentsFromAcc,
});

const getInitialAccumulation = postsHeap => ({
  newComponentArray: [],
  postsHeap,
});

const getComposedComponents = (orderedComponents, posts) =>
  orderedComponents.reduce(
    gridItemsReducerFunction,
    getInitialAccumulation(posts),
  );
