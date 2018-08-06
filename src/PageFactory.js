// @flow

// @flow

import React, { PureComponent, Fragment } from "react";

import {
  MostRecent,
  TagPostsSingleColumn,
  Instagram,
  Newsletter,
  Trending,
} from "./components/modules";

import { ResponsiveLeaderboard as Leaderboard } from "./components/ads";

import { Text, Row, Section } from "components/primitives";

import {
  SECTION_TYPES,
  SMALL_SECTIONS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";

import { getSectionData, getPostArray } from "data.js";

export const isSmallType = ({ type }) => SMALL_SECTIONS.includes(type);

export const getSequenceAwareSpacingVariant = (
  currentSection,
  index,
  array,
) => {
  if (index === 0) {
    return SECTION_SPACING_VARIANTS.NONE;
  }

  const prevSection = array[index - 1];

  return isSmallType(currentSection) || isSmallType(prevSection)
    ? SECTION_SPACING_VARIANTS.SMALL
    : SECTION_SPACING_VARIANTS.LARGE;
};

export const SECTION_TYPE_COMPONENT_MAP = {
  [SECTION_TYPES.AD]: Leaderboard,
  [SECTION_TYPES.RECENT]: MostRecent,
  [SECTION_TYPES.TAG_TILE_BOX]: TagPostsSingleColumn,
  [SECTION_TYPES.INSTAGRAM]: Instagram,
  [SECTION_TYPES.NEWSLETTER]: Newsletter,
  [SECTION_TYPES.TRENDING]: Trending,
};

export const getSectionComponentNameBySectionType = sectionType =>
  SECTION_TYPE_COMPONENT_MAP[sectionType];

// data.map((item, index, array) => {
//   const spacingVariant = getSequenceAwareSpacingVariant(item, index, array);
// });

class PageSections extends PureComponent {
  render() {
    const { data } = this.props;
    return (
      <Fragment>
        {data.map((item, index, array) => {
          const spacingVariant = getSequenceAwareSpacingVariant(
            item,
            index,
            array,
          );
          const Component = getSectionComponentNameBySectionType(item.type);
          const id = `${item.type}-${item.id}`;

          return (
            <Section id={id} key={id} topSpacing={spacingVariant}>
              <Row style={{ backgroundColor: "gray", height: 100 }} />
            </Section>
          );
        })}
      </Fragment>
    );
  }
}

export default PageSections;
