import { getSequenceAwareSpacingVariant } from "./PageFactory";

import {
  SECTION_TYPES,
  SMALL_SECTIONS,
  SECTION_SPACING_VARIANTS,
} from "constants/index";

const getSpacingVariants = sectionTypeArray =>
  Object.values(sectionTypeArray).reduce((acc, value, index, array) => {
    return [
      ...acc,
      getSequenceAwareSpacingVariant({ type: value }, index, array),
    ];
  }, []);

test("first item in array should have a spacing variant of none since the spacing is handled by parent container", () => {
  const firstItem = getSpacingVariants(SECTION_TYPES)[0];
  expect(firstItem).toBe(SECTION_SPACING_VARIANTS.NONE);
});

test("small section types should apply spacing variant of small to themselves (unless first) and the subsequent section", () => {
  const largeSection = Object.values(SECTION_TYPES).find(
    section => !SMALL_SECTIONS.includes(section),
  );
  const smallSection = SMALL_SECTIONS[0];
  const spacingVariants = getSpacingVariants([
    smallSection,
    smallSection,
    largeSection,
  ]);

  expect(spacingVariants).toMatchObject([
    SECTION_SPACING_VARIANTS.NONE,
    SECTION_SPACING_VARIANTS.SMALL,
    SECTION_SPACING_VARIANTS.SMALL,
  ]);
});
