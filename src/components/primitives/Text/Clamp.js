// @flow

import React, { PureComponent, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

import type { RNW$Styles } from "react-native";

type Props = {
  numberOfLines: number,
  children: string,
  style: RNW$Styles,
};
type State = {
  isTruncating: boolean,
  containerWidth: number,
  preEllipsisText: string,
  restOfText: string,
};

export default class Clamp extends PureComponent<Props, State> {
  state = {
    isTruncating: false,
    containerWidth: 0,
    preEllipsisText: "",
    restOfText: "",
  };

  handleSingleLineLayout = (event: any) => {
    const singleLineWidth = event.nativeEvent.layout.width;
    const { numberOfLines, children: text } = this.props;
    const { containerWidth } = this.state;

    const averageCharsPerLine = getAverageCharsPerLine({
      singleLineWidth,
      textLength: text.length,
      containerWidth,
    });

    const { preEllipsisText, restOfText } = getText({
      text,
      numberOfLines,
      averageCharsPerLine,
    });

    this.setState(state => ({
      preEllipsisText,
      restOfText,
      isTruncating: false,
    }));
  };

  handleContainerLayout = ({
    nativeEvent: {
      layout: { width },
    },
  }: any) => {
    if (width === this.state.containerWidth) {
      return;
    }
    this.setState(state => ({
      containerWidth: width,
      isTruncating: true,
    }));
  };

  renderTextOnSingleLine = () => {
    const { numberOfLines, style, ...rest } = this.props;
    return (
      <View style={styles.singleLineContainer}>
        <Text
          onLayout={this.handleSingleLineLayout}
          numberOfLines={1}
          style={[style, styles.singleLineText]}
          {...rest}
        >
          {this.props.children}
        </Text>
      </View>
    );
  };

  render() {
    const { numberOfLines, ...rest } = this.props;
    const { isTruncating, preEllipsisText, restOfText } = this.state;

    return (
      <View onLayout={this.handleContainerLayout} style={styles.container}>
        {isTruncating ? (
          this.renderTextOnSingleLine()
        ) : (
          <Fragment>
            <PreEllipsisLines {...rest} text={preEllipsisText} />
            <EllipsisLine {...rest} text={restOfText} />
          </Fragment>
        )}
      </View>
    );
  }
}

const PreEllipsisLines = ({ text, ...rest }) => {
  return <Text {...rest}>{text}</Text>;
};

const EllipsisLine = ({ text, ...rest }) => {
  return text && text.length ? (
    <Text numberOfLines={1} {...rest}>
      {text}
    </Text>
  ) : null;
};

const getAverageCharsPerLine = ({
  textLength,
  singleLineWidth,
  containerWidth,
}) => {
  return (textLength * containerWidth) / singleLineWidth;
};

const getLineBreakIndex = ({ charsPerLine, text }) => {
  const draftSlice = text.slice(0, charsPerLine).lastIndexOf(" ");
  return draftSlice;
};

type getTextProps = {
  text: string,
  numberOfLines: number,
  averageCharsPerLine: number,
};
type getTextReturn = {
  preEllipsisText: string,
  restOfText: string,
};
const getText = (config: getTextProps): getTextReturn => {
  const { text: fullText, numberOfLines, averageCharsPerLine } = config;

  const preEllipsisLineCountArray = Array.from({ length: numberOfLines - 1 });
  const reducer = getReducer(averageCharsPerLine);
  const initial = {
    preEllipsisText: "",
    restOfText: fullText,
  };

  return preEllipsisLineCountArray.reduce(reducer, initial);
};

const getReducer = charsPerLine => ({
  preEllipsisText,
  restOfText,
}: getTextReturn): getTextReturn => {
  const lineBreakIndex =
    restOfText.length < charsPerLine
      ? restOfText.length
      : getLineBreakIndex({
          text: restOfText,
          charsPerLine,
        });

  return {
    preEllipsisText: [...preEllipsisText, restOfText.slice(0, lineBreakIndex)],
    restOfText: restOfText.slice(lineBreakIndex),
  };
};

const styles = StyleSheet.create({
  container: {
    width: "100%",
    height: "100%",
  },
  singleLineContainer: { position: "absolute" },
  singleLineText: { flex: 1 },
});
