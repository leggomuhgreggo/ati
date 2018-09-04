import React, { PureComponent } from "react";
import { View } from "react-native";
import { Post } from "components/modules/";

type Props = {
  posts: any,
};

class PostList extends PureComponent {
  render() {
    const { posts } = this.props;

    return posts.map((post, index) => (
      <View key={post.id} style={index === 0 ? {} : { marginTop: 25 }}>
        <Post layoutVariant="medium" {...post} />
      </View>
    ));
  }
}

export default PostList;
