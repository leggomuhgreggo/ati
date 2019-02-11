export const AD_TYPES = {
  /**
   * The desktop mrecs are constrained by the box around it
   * Sizes: 300x50, 320x50, 300x250
   */
  EMBEDDED_MREC: "EMBEDDED_MREC",

  /**
   * The mobile mrecs are in-between boxes, so they are less constrained.
   * Sizes: 300x50, 320x50, 300x250, 300x600, 300x1050
   */
  MOBILE_MREC: "MOBILE_MREC",

  /**
   * The leaderboards are constrained by being next to the section title
   * header. Anything higher than 90  or wider than 728 looks silly.
   * Sizes: 728x90, 320x50, 300x50
   */
  EMBEDDED_LEADERBOARD: "EMBEDDED_LEADERBOARD",

  /**
   *  There are also leaderboards in-between modules that are not constrained
   * and can use the full width / height
   * Sizes: 728x90, 320x50, 300x50, 300x250, 970x250, 970x90
   */
  SUPER_LEADERBOARD: "SUPER_LEADERBOARD",
};

/**
 * This maps ad types to their corresponding function names in the ATI ad
 * scripts
 */
export const AD_FUNCS_MAP = {
  [AD_TYPES.EMBEDDED_LEADERBOARD]: "pbh_new_fp_lboard",
  [AD_TYPES.EMBEDDED_MREC]: "pbh_new_fp_mrec",
  [AD_TYPES.MOBILE_MREC]: "pbh_new_fp_mobile_mrec",
  [AD_TYPES.SUPER_LEADERBOARD]: "pbh_new_fp_superlboard",
};

/**
 * This maps ad types to their corresponding list of potential sizes
 */
export const AD_SIZES_MAP = {
  [AD_TYPES.EMBEDDED_MREC]: [[300, 50], [320, 50], [300, 250]],
  [AD_TYPES.MOBILE_MREC]: [
    [300, 50],
    [320, 50],
    [300, 250],
    [300, 600],
    [300, 1050],
  ],
  [AD_TYPES.EMBEDDED_LEADERBOARD]: [[728, 90], [320, 50], [300, 50]],
  [AD_TYPES.SUPER_LEADERBOARD]: [
    [728, 90],
    [320, 50],
    [300, 50],
    [300, 250],
    [970, 250],
    [970, 90],
  ],
};
