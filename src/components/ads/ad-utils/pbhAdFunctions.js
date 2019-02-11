import { AD_TYPES, AD_FUNCS_MAP } from "../ad-constants";
import { getCreateAdFuncForType } from "./getCreateAdFuncForType";
import { getAdId } from "./getAdId";

/**
 * getIdFromGlobalAdRegistration
 *
 * Registers instance of PBH ad function for given ad type and returns the
 * associated ID. Used in the MakeAdComponent HOC.
 *
 * @param {String} adType - the type of add from the AD_TYPE enum in constants
 * @returns {String} id
 */
export const getIdFromGlobalAdRegistration = adType => {
  const adFunc = getCreateAdFuncForType(adType);

  if (!adFunc) return;

  const adId = getAdId();

  registerAdFunctionWithId(adFunc, adId);

  return adId;
};

/**
 * startAds
 *
 * Appends pbh_start_ads to the end of the PbhAdUnit_load queue array.
 * Used in the App component's componentDidMount method
 */
export const startAds = () => {
  getAdLoadArray().push(() => window.pbh_start_ads());
};

/**
 * displayAd
 *
 * Appends display function for the ad instance to the end of the PbhAdUnit_cmd
 * queue array.
 * Used in the MakeAdComponent HOC's componentDidMount method
 */
export const displayAd = adId => {
  getAdCommandArray().push(() => window.pbh_ad_units[adId].display());
};

/**
 * registerAdFunctionWithId
 *
 * Appends create function to the PbhAdUnit_load queue array
 * @param {Function} adFunc
 * @param {String} adId
 */
const registerAdFunctionWithId = (adFunc, adId) => {
  getAdLoadArray().push(() => adFunc(adId));
};

/**
 * getAdLoadArray
 *
 * Functional wrapper to resolve PbhAdUnit_cmd array from window
 */
const getAdLoadArray = () => window.PbhAdUnit_cmd || [];

/**
 * getAdCommandArray
 *
 * Functional wrapper to resolve PbhAdUnit_load array from window
 */
const getAdCommandArray = () => window.PbhAdUnit_cmd || [];
