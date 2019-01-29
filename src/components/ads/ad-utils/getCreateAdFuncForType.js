import { AD_FUNCS_MAP } from "../ad-constants";

export const getCreateAdFuncForType = adType => {
  const adFuncName = getAdFunctionNameByAdType(adType);

  try {
    return getGlobalAdFunctionForTypeName(adFuncName);
  } catch (error) {
    console.warn(`Cannot create ${adType}. Error: ${error}`);
  }
};

const getAdFunctionNameByAdType = adType => AD_FUNCS_MAP[adType];

const getGlobalAdFunctionForTypeName = adFuncName => {
  const adFunc = window[adFuncName];
  if (!adFunc) {
    throw `Func not found ${adFuncName}`;
  }
  return adFunc;
};
