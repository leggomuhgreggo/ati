import { AD_SIZES_MAP } from "../ad-constants";

/**
 * getMinAdDimensions
 *
 * This function takes an adType which it uses to gets an array of size options
 * for the ad type and reduces the values to determine the width and height
 * minimums
 *
 * @param {|DIMS_ARR|} sizeOptionsArrayForType - array of potential ad sizes
 * @returns Array of values corresponding to min width and height
 */

const DEFAULT_DIMS_ARR = [0, 0];

export const getMinAdDimensions = adType => {
  const [minWidth, minHeight] = getSizeOptionsForType(adType).reduce(
    minDimsReducer,
    DEFAULT_DIMS_ARR,
  );

  return { minWidth, minHeight };
};

const getSizeOptionsForType = adType => AD_SIZES_MAP[adType];

const minDimsReducer = (acc, item) => {
  const [itemWidth, itemHeight] = item;
  const [accWidth, accHeight] = acc;

  return [
    itemWidth < accWidth ? itemWidth : accWidth,
    itemHeight < accHeight ? itemHeight : accHeight,
  ];
};
