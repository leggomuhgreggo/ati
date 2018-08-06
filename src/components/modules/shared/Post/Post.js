// @flow

import React, { PureComponent } from "react";
import { View, StyleSheet } from "react-native";

import { PostDetails, PostLabel } from "components/modules";
import { Image } from "components/primitives";
import PostTitle from "../PostTitle";
// import PostImage from "../PostImage";

import type { Category } from "components/modules";

const POST_LAYOUT_VARIANT = {
  OVERLAY: "overlay",
  REDUCED: "reduced",
  DEFAULT: "default",
};

const POST_TYPE = {
  VIDEO: "video",
  DEFAULT: "default",
};

type Props = {
  category: Category,
  title: string,
  categoryColor: string,
  imageSrc?: string,
  containerStyle?: any,
  detailsOffset?: number,
  layoutVariant?: $values<typeof POST_LAYOUT_VARIANT>,
  postType?: $values<typeof POST_TYPE>,
  imageWidth?: number,
  imageHeight?: number,
};

class Post extends PureComponent<Props> {
  static defaultProps = {
    layoutVariant: POST_LAYOUT_VARIANT.DEFAULT,
    overlayDetails: false,
    style: {},
    detailsOffset: 0,
  };

  getDetailsStyles = () => {
    const { detailsOffset } = this.props;
    return this.showOverlay()
      ? {
          position: "absolute",
          bottom: detailsOffset,
          left: 0,
          padding: 10,
        }
      : {
          paddingVertical: 10,
        };
  };

  getTitleStyles = () => {
    const { layoutVariant } = this.props;
    return {
      color: layoutVariant === POST_LAYOUT_VARIANT.OVERLAY ? "white" : "black",
    };
  };

  getLabelSpacer = () =>
    this.props.layoutVariant === POST_LAYOUT_VARIANT.DEFAULT
      ? 20
      : this.props.layoutVariant === POST_LAYOUT_VARIANT.OVERLAY
        ? 0
        : 0;

  showImage = () => {
    const { layoutVariant, imageSrc } = this.props;
    return layoutVariant !== POST_LAYOUT_VARIANT.REDUCED && imageSrc;
  };

  showOverlay = () => this.props.layoutVariant === POST_LAYOUT_VARIANT.OVERLAY;

  showLine = () => this.props.layoutVariant === POST_LAYOUT_VARIANT.DEFAULT;

  render() {
    const {
      containerStyle,
      categoryColor,
      categoryName,
      title,
      imageSrc,
      layoutVariant,
      imageWidth,
      imageHeight,
      children,
    } = this.props;
    return (
      <View style={[styles.postBox, containerStyle]}>
        <View>
          {this.showImage() && (
            <Image width={imageWidth} height={imageHeight} src={imageSrc} />
          )}

          {this.showOverlay() && <ContrastOverlay />}

          <PostDetails style={this.getDetailsStyles()}>
            <PostLabel
              style={[styles.postLabel]}
              spacer={this.getLabelSpacer()}
              color={categoryColor}
              categoryName={categoryName}
              inline={layoutVariant !== POST_LAYOUT_VARIANT.OVERLAY}
              fill={layoutVariant === POST_LAYOUT_VARIANT.OVERLAY}
            />
            <PostTitle title={title} style={this.getTitleStyles()} />
          </PostDetails>
          {children}
        </View>

        {this.showLine() && <Line />}
      </View>
    );
  }
}

export default Post;

const styles = StyleSheet.create({
  postBox: {
    width: "100%",
    flex: 1,
    justifyContent: "space-between",
  },
  postTitle: {
    marginTop: 10,
  },
  postLine: {
    marginTop: 30,
    backgroundColor: "black",
    height: 3,
    width: "100%",
  },
  overlay: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "80%",
    backgroundImage:
      "linear-gradient(to bottom,transparent 0,rgba(0,0,0,.02) 14%,rgba(0,0,0,.05) 23%,rgba(0,0,0,.18) 43%,rgba(0,0,0,.41) 62%,rgba(0,0,0,.8) 88%,rgba(0,0,0,.81) 90%,rgba(0,0,0,.9) 95%,rgba(0,0,0,.94) 100%)",
  },
});

const Line = ({ imageSrc }) => <View style={styles.postLine} />;

class ContrastOverlay extends PureComponent {
  render() {
    return <View style={styles.overlay} />;
  }
}
