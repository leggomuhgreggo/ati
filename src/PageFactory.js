// @flow

import React, { PureComponent, Fragment } from "react";
import {
  MostRecent,
  TagPostsSingleColumn,
  Instagram,
  Newsletter,
  Trending,
} from "components/modules";
import { ResponsiveLeaderboard } from "components/ads";
import { Section } from "components/primitives";

import {
  SECTION_TYPES,
  SMALL_SECTIONS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";

export const SECTION_TYPE_COMPONENT_MAP = {
  [SECTION_TYPES.AD]: ResponsiveLeaderboard,
  [SECTION_TYPES.RECENT]: MostRecent,
  [SECTION_TYPES.TAG_TILE_BOX]: TagPostsSingleColumn,
  [SECTION_TYPES.INSTAGRAM]: Instagram,
  [SECTION_TYPES.NEWSLETTER]: Newsletter,
  [SECTION_TYPES.TRENDING]: Trending,
};

type SectionType = $Values<SECTION_TYPES>;

class PageSections extends PureComponent<{ data: any }> {
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

          const Module = getSectionComponentNameBySectionType(item.type);

          return (
            <Section key={index + item.type} topSpacing={spacingVariant}>
              <Module {...item} />
            </Section>
          );
        })}
      </Fragment>
    );
  }
}

export default PageSections;

type Sections = {
  type: SectionType,
};
export const isSmallType = ({ type }: Sections): boolean =>
  SMALL_SECTIONS.includes(type);

export const getSequenceAwareSpacingVariant = (
  currentSection: SectionType,
  index: number,
  array: Array<any>,
) => {
  if (index === 0) {
    return SECTION_SPACING_VARIANTS.NONE;
  }

  const prevSection: SectionType = array[index - 1];

  return isSmallType(currentSection) || isSmallType(prevSection)
    ? SECTION_SPACING_VARIANTS.SMALL
    : SECTION_SPACING_VARIANTS.LARGE;
};

export const getSectionComponentNameBySectionType = (
  sectionType: SectionType,
) => SECTION_TYPE_COMPONENT_MAP[sectionType];
