import React, { PureComponent, Fragment } from "react";
import { StyleSheet, Text, View } from "react-native";

export default class Clamp extends PureComponent {
  state = {
    isTruncating: null,
    containerWidth: null,
    preEllipsisText: null,
    restOfText: null,
  };

  handleSingleLineLayout = event => {
    const singleLineWidth = event.nativeEvent.layout.width;
    const {
      numberOfLines,
      children: text,
      children: { length: totalCharCount },
    } = this.props;
    const { containerWidth } = this.state;

    const averageCharsPerLine = getAverageCharsPerLine({
      singleLineWidth,
      totalCharCount,
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
  }) => {
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
  totalCharCount,
  singleLineWidth,
  containerWidth,
}) => {
  return (totalCharCount * containerWidth) / singleLineWidth;
};

const getLineBreakIndex = ({ charsPerLine, text }) => {
  const draftSlice = text.slice(0, charsPerLine).lastIndexOf(" ");
  return draftSlice;
};

const getText = config => {
  const { text: fullText, numberOfLines, averageCharsPerLine } = config;

  const preEllipsisLineCountArray = Array.from({ length: numberOfLines - 1 });
  const reducer = getReducer(averageCharsPerLine);
  const initial = {
    preEllipsisText: "",
    restOfText: fullText,
  };

  return preEllipsisLineCountArray.reduce(reducer, initial);
};

const getReducer = charsPerLine => ({ preEllipsisText, restOfText }) => {
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
