import React, { PureComponent } from "react";
import { View } from "react-native";
import { Post } from "components/modules/";

type Props = {
  posts: any,
  isDesktop: boolean,
};

class PostList extends PureComponent<Props> {
  render() {
    const { posts, isDesktop } = this.props;

    return posts.map((post, index) => (
      <View key={post.id} style={index === 0 ? {} : { marginTop: 20 }}>
        <Post
          numberOfLines={2}
          layoutVariant="reduced"
          isDesktop={isDesktop}
          {...post}
        />
      </View>
    ));
  }
}

export default PostList;
