import React, { PureComponent } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import ChevronLeft from "react-icons/lib/fa/chevron-left";
import ChevronRight from "react-icons/lib/fa/chevron-right";

export default class Arrow extends PureComponent {
  render() {
    const {
      dir,
      currentSlide,
      previousSlide,
      nextSlide,
      slideCount,
    } = this.props;

    const isPrev = dir === "prev";

    const handleClick = isPrev ? previousSlide : nextSlide;
    const disabled =
      (isPrev && currentSlide === 0) ||
      (!isPrev && currentSlide === slideCount);

    const ArrowComponent = isPrev ? ChevronLeft : ChevronRight;

    return (
      <TouchableOpacity
        disabled={disabled}
        style={[
          styles.button,
          {
            transform: [
              {
                translateX: isPrev ? "-175%" : "175%",
              },
            ],
          },
        ]}
        onClick={handleClick}
      >
        <ArrowComponent style={{ color: "white", width: "80%" }} />
      </TouchableOpacity>
    );
  }
}

const ARROW_SIZE = 30;

const styles = StyleSheet.create({
  button: {
    borderRadius: "50%",
    backgroundColor: "black",
    width: ARROW_SIZE,
    height: ARROW_SIZE,
    alignItems: "center",
    justifyContent: "center",
  },
});
