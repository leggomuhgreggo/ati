import React, { PureComponent } from "react";
import { StyleSheet } from "react-native";
import { Container } from "components/primitives";
import { ModuleBox } from "components/modules";
import Header from "./Header";
import Carousel from "./Carousel";

// import { Responsive } from "components/utils";
// import { BREAKPOINTS } from "constants/index";

export default class Instagram extends PureComponent {
  render() {
    const { posts } = this.props;
    return (
      <Container type="content">
        <ModuleBox style={styles.container}>
          <Header />

          <Carousel posts={posts} />
        </ModuleBox>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 75,
    paddingVertical: 45,
  },
});
