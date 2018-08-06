// @flow

import React, { PureComponent, Fragment } from "react";
import { Text, StyleSheet } from "react-native";

import { ModuleBox } from "components/modules";
type Props = {
  overlap: number,
};

class OverlapScaffold extends PureComponent<Props> {
  static defaultProps = {
    overlap: 0,
  };

  static Main = ({ children }) => children;
  static Overlap = ({ children }) => children;

  getScaffoldChildren = () => {
    const { Main, Overlap } = OverlapScaffold;
    const { overlap, children } = this.props;
    const { getMainPost, getOverlap, getContainer } = this;
    return React.Children.map(children, function(child) {
      const grandchild = React.Children.toArray(child.props.children)[0];
      if (child.type === Main) {
        return getMainPost(grandchild);
      }
      if (child.type === Overlap) {
        return [getOverlap(grandchild), getContainer(grandchild)];
      }
    });
  };
  getOverlap = Container =>
    React.cloneElement(Container, {
      children: [<ModuleBox />],
      key: "overlap",
      style: [
        Container.props.style,
        {
          marginTop: -this.props.overlap,
          zIndex: 10,
          overflow: "hidden",
          height: this.props.overlap,
        },
      ],
    });
  getContainer = Container =>
    React.cloneElement(Container, {
      style: [Container.props.style, { marginTop: -this.props.overlap }],
    });
  getMainPost = MainPost =>
    React.cloneElement(MainPost, {
      bottomOverlap: this.props.overlap,
    });

  render() {
    const { overlap } = this.props;
    return this.getScaffoldChildren();
  }
}

export default OverlapScaffold;
