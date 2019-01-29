import { AD_TYPES, AD_FUNCS_MAP } from "../ad-constants";
import { getCreateAdFuncForType } from "./getCreateAdFuncForType";
import { getAdId } from "./getAdId";

export const getAdRegistrationID = adType => {
  const adFunc = getCreateAdFuncForType(adType);
  const adId = getAdId();

  registerAdFunctionWithId(adFunc, adId);

  return adId;
};

export const startAds = () => {
  getAdLoadArray().push(() => window.pbh_start_ads());
};

export const displayAd = adId => {
  getAdCommandArray().push(() => window.pbh_ad_units[adId].display());
};

const registerAdFunctionWithId = (adFunc, adId) => {
  getAdLoadArray().push(() => adFunc(adId));
  return;
};

const getAdLoadArray = () => window.PbhAdUnit_load || [];
const getAdCommandArray = () => window.PbhAdUnit_cmd || [];
