// @flow

import React, { PureComponent, Fragment } from "react";
import { View, Text, StyleSheet } from "react-native";
import { Container } from "components/primitives";

type Props = {
  overlap: number,
  containerPadding: number,
};
class OverlapScaffold extends PureComponent<Props> {
  static defaultProps = {
    overlap: 0,
    containerPadding: 0,
  };

  static Main = ({ children }) => children;
  static Overlap = ({ children }) => children;

  getScaffoldContentByType = type => {
    const ScaffoldChild = React.Children.toArray(this.props.children).find(
      child => child.type === type,
    );
    return React.Children.toArray(ScaffoldChild.props.children)[0];
  };

  getMainPost = () => {
    const MainPost = this.getScaffoldContentByType(OverlapScaffold.Main);
    return React.cloneElement(MainPost, {
      bottomOverlap: this.props.overlap,
      containerPadding: this.props.containerPadding,
    });
  };

  render() {
    const { overlap } = this.props;

    return (
      <Fragment>
        {this.getMainPost()}
        <Container
          style={{
            marginTop: -this.props.overlap,
            paddingHorizontal: this.props.containerPadding,
            zIndex: 10,
          }}
          type="content"
        >
          <View
            style={{
              backgroundColor: "white",
              height: this.props.overlap,
            }}
          />
        </Container>
        <Container
          style={{
            marginTop: -this.props.overlap,
            paddingHorizontal: this.props.containerPadding,
          }}
          type="content"
        >
          {this.getScaffoldContentByType(OverlapScaffold.Overlap)}
        </Container>
      </Fragment>
    );
  }
}

export default OverlapScaffold;
