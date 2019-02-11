import { AD_FUNCS_MAP } from "../ad-constants";

/**
 * getCreateAdFuncForType
 *
 * This function takes an adType, resolves the associated pbh ad function name
 * and tries to resolve it from the window object.
 * Logs a console.warn if unsuccessful
 *
 * @param {String} adType - the type of add from the AD_TYPE enum in constants
 * @returns {Function} || {undefined}
 */
export const getCreateAdFuncForType = adType => {
  const adFuncName = getAdFunctionNameByAdType(adType);

  try {
    return getGlobalAdFunctionForTypeName(adFuncName);
  } catch (error) {
    console.warn(`Cannot create ${adType}. Error: ${error}`);
  }
};

/**
 * getAdFunctionNameByAdType
 *
 * takes adType and returns the associated name of the PBH ad function
 *
 * @param {String} adType - the type of add from the AD_TYPE enum in constants
 * @returns {String} ad function name
 */
const getAdFunctionNameByAdType = adType => AD_FUNCS_MAP[adType];

/**
 * getGlobalAdFunctionForTypeName
 *
 * Takes adFuncName and tries to resolve from the window object, throwing an
 * error if unsuccessful.
 *
 * @param {String} adFuncName - name of the PBH ad function
 * @returns {Function} the function assigned to key for PBH ad function name
 */
const getGlobalAdFunctionForTypeName = adFuncName => {
  const adFunc = window[adFuncName];
  if (!adFunc) {
    throw `Func not found ${adFuncName}`;
  }
  return adFunc;
};
