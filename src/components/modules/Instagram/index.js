import React, { PureComponent } from "react";
import Carousel from "nuka-carousel";
import { StyleSheet, View, TouchableOpacity } from "react-native";

import ChevronLeft from "react-icons/lib/fa/chevron-left";
import ChevronRight from "react-icons/lib/fa/chevron-right";
import InstagramIcon from "react-icons/lib/fa/instagram";

import { Container, Text, Image } from "components/primitives";
import { ModuleBox } from "components/modules";
import { COLOR_MAP } from "constants.js";

import { Responsive } from "components/utils";
import createLockFunction from "utils/lock";
import { BREAKPOINTS, THEME_SPACING } from "constants.js";

export default class Instagram extends PureComponent {
  renderMobile = () => {
    const { data } = this.props;
    return (
      <Container type="content" style={{ paddingHorizontal: 30 }}>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginBottom: 30,
          }}
        >
          <View>
            <Text size={2}>#ati</Text>
          </View>

          <View>
            <InstagramButton />
          </View>
        </View>

        <Carousel
          frameOverflow={"visible"}
          slidesToShow={1}
          slidesToScroll={1}
          wrapAround
          heightMode="first"
          renderBottomCenterControls={false}
          renderCenterLeftControls={false}
          renderCenterRightControls={false}
          cellSpacing={10}
        >
          {data.map(({ id, ...post }, i) => (
            <InstagramSlide key={id} {...post} />
          ))}
        </Carousel>
      </Container>
    );
  };
  renderDesktop = () => {
    const { data } = this.props;
    return (
      <Container type="content">
        <ModuleBox style={styles.container}>
          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              marginBottom: 30,
            }}
          >
            <View>
              <Text size={2}>
                #ati on{" "}
                <Text size={2} style={{ color: COLOR_MAP.VERMILION }}>
                  Instagram
                </Text>
              </Text>
            </View>

            <View>
              <InstagramButton />
            </View>
          </View>
          <Carousel
            slidesToShow={3}
            slidesToScroll={3}
            wrapAround
            heightMode="first"
            renderBottomCenterControls={false}
            renderCenterLeftControls={props => <Arrow dir="prev" {...props} />}
            renderCenterRightControls={props => <Arrow dir="next" {...props} />}
            cellSpacing={30}
          >
            {data.map(({ id, ...post }, i) => (
              <InstagramSlide key={id} {...post} />
            ))}
          </Carousel>
        </ModuleBox>
      </Container>
    );
  };
  render() {
    return (
      <Responsive>
        {({ minWidth, width }) => {
          const showMobileLayout = !minWidth(BREAKPOINTS.LG);
          return showMobileLayout
            ? this.renderMobile(width)
            : this.renderDesktop();
        }}
      </Responsive>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 75,
    paddingVertical: 45,
  },
});

class InstagramSlide extends PureComponent {
  render() {
    const { imageSrc, title } = this.props;
    return (
      <View
        style={{
          flexDirection: "row",
          flexWrap: "wrap",
          flexShrink: 3,
          alignSelf: "flex-start",
        }}
      >
        <Image
          style={{
            height: 310,
            width: 310,
          }}
          source={{
            uri: imageSrc,
          }}
        />

        <View
          style={{
            backgroundColor: "black",
            padding: 10,
            width: "100%",
            height: 110,
          }}
        >
          <Text style={{ color: "white" }}>{title}</Text>
        </View>
      </View>
    );
  }
}

class Arrow extends PureComponent {
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

    const Symbol = () =>
      isPrev ? (
        <ChevronLeft style={{ color: "white", width: "80%" }} />
      ) : (
        <ChevronRight style={{ color: "white", width: "80%" }} />
      );

    return (
      <TouchableOpacity
        disabled={disabled}
        style={{
          borderRadius: "50%",
          backgroundColor: "black",
          width: 30,
          height: 30,
          alignItems: "center",
          justifyContent: "center",
          transform: [
            {
              translateX: isPrev ? "-175%" : "175%",
            },
          ],
        }}
        onClick={handleClick}
      >
        <Symbol />
      </TouchableOpacity>
    );
  }
}

class InstagramButton extends PureComponent {
  render() {
    const { imageSrc, title } = this.props;
    return (
      <View
        style={{
          backgroundColor: COLOR_MAP.VERMILION,
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <InstagramIcon
          style={{
            marginRight: 10,
            color: "white",
          }}
        />
        <Text style={{ color: "white" }}>Follow Us</Text>
      </View>
    );
  }
}
