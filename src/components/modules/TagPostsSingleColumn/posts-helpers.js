// @flow

import React from "react";

import { Mrec } from "components/ads";
import { Post } from "components/modules";

export const POST_COMPONENTS = {
  LG: props => (
    <Post
      layoutVariant="overlay"
      fontStyles={{ fontSize: 24, lineHeight: 30 }}
      imageWidth={735}
      imageHeight={430}
      multiplier={2}
      {...props}
    />
  ),
  MD: props => <Post layoutVariant="medium" {...props} />,
};

export const GRID_COMPONENTS = {
  ...POST_COMPONENTS,
  AD: Mrec,
};

const makeConditionedMergeReducer = ({
  condition,
  handleTrue,
  handleFalse,
  handleFinal,
}) => (...args) => {
  const { 2: currentIndex, 3: array } = args;
  const isFinal = currentIndex === array.length - 1;

  const accCandidate = condition(...args)
    ? handleTrue(...args)
    : handleFalse(...args);

  return isFinal ? handleFinal(accCandidate) : accCandidate;
};

const isPostType = (...args) => {
  const { 1: CurrentComponent } = args;
  return Object.values(POST_COMPONENTS).includes(CurrentComponent);
};

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

export const getComposedComponents = (orderedComponents, posts) =>
  orderedComponents.reduce(
    gridItemsReducerFunction,
    getInitialAccumulation(posts),
  );
