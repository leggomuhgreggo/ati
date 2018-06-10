// @flow

import React, { PureComponent } from "react";

import { Container, Row } from "components/primitives";

import Posts from "./Posts";

type Props = {};

class Trending extends PureComponent<Props> {
  render() {
    const {
      data: { posts },
    } = this.props;
    return (
      <Container type="content">
        <Row style={{ marginTop: 30 }}>
          <Posts posts={posts} />
        </Row>
      </Container>
    );
  }
}

export default Trending;
