// @flow

import {
  SECTION_TYPES,
  SMALL_SECTIONS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";

export const isSmallType = type => SMALL_SECTIONS.includes(type);

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

// data.map((item, index, array) => {
//   const spacingVariant = getSequenceAwareSpacingVariant(item, index, array);
// });
