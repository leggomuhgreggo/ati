/**
 * gets value for id attribute on ad div
 * To Do: Make adIndex more deterministic
 */

const ts = Date.now();
let adIndex = 0;

export const getAdId = () => `div-gpt-ad-${ts}-${adIndex++}`;
