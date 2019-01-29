import { AD_TYPES } from "./ad-constants";
import MakeAdComponent from "./MakeAdComponent";

const {
  MOBILE_MREC,
  EMBEDDED_MREC,
  EMBEDDED_LEADERBOARD,
  SUPER_LEADERBOARD,
} = AD_TYPES;

export const MobileMrec = MakeAdComponent(MOBILE_MREC);
export const Mrec = MakeAdComponent(EMBEDDED_MREC);
export const Leaderboard = MakeAdComponent(EMBEDDED_LEADERBOARD);
export const ResponsiveLeaderboard = MakeAdComponent(SUPER_LEADERBOARD);
