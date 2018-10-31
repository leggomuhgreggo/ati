const PbhAdUnit_load = window.PbhAdUnit_load || [];
const PbhAdUnit_cmd = window.PbhAdUnit_cmd || [];
const ts = Date.now();

let adIndex = 0;
function getAdId() {
  return `div-gpt-ad-${ts}-${adIndex++}`;
}

const AD_FUNCS_MAP = {
  lboard: "pbh_new_fp_lboard",
  mrec: "pbh_new_fp_mrec",
  mobileMrec: "pbh_new_fp_mobile_mrec",
  superlboard: "pbh_new_fp_superlboard",
};

function createAd(type) {
  const adFuncName = AD_FUNCS_MAP[type];
  const adFunc = window[adFuncName];
  if (!adFunc) {
    console.warn("cannot create", type, "func not found", adFuncName);
    return;
  }

  const adId = getAdId();
  PbhAdUnit_load.push(() => adFunc(adId));

  return adId;
}

export const createLboard = () => createAd("lboard");
export const createMrec = () => createAd("mrec");
export const createMobileMrec = () => createAd("mobileMrec");
export const createSuperLboard = () => createAd("superlboard");

export function startAds() {
  PbhAdUnit_load.push(() => window.pbh_start_ads());
}

export function displayAd(adId) {
  PbhAdUnit_cmd.push(() => window.pbh_ad_units[adId].display());
}
