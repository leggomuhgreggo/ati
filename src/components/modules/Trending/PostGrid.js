// @flow

import React, { PureComponent } from "react";

import { Grid } from "components/primitives";
import { Post } from "components/modules";

const COMPONENT_TYPES = {
  MD: props => (
    <Post
      layoutVariant="medium"
      key={props.id}
      imageWidth={286}
      imageHeight={286}
      {...props}
    />
  ),
  SM: props => <Post layoutVariant="reduced" key={props.id} {...props} />,
};

type Props = {
  posts: Array<any>,
};

class Posts extends PureComponent<Props> {
  getPostsArray = () => {};
  getFirstRow = () => {};

  render() {
    const { posts } = this.props;

    return (
      <Grid spacer={30}>
        {posts.map(
          (post, index) =>
            index < 3 ? COMPONENT_TYPES.MD(post) : COMPONENT_TYPES.SM(post),
        )}
      </Grid>
    );
  }
}

export default Posts;
