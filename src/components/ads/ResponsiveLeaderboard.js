import React, { PureComponent } from "react";
import { Responsive } from "components/utils";
import { Leaderboard, Mrec } from "./";
import { BREAKPOINTS } from "constants.js";

export default class ResponsiveLeaderboard extends PureComponent {
  render() {
    const adBreakpoint = BREAKPOINTS.LG;
    return (
      <Responsive>
        {({ minWidth }) => {
          console.log(minWidth(adBreakpoint));
          return minWidth(adBreakpoint) ? <Leaderboard /> : <Mrec />;
        }}
      </Responsive>
    );
  }
}
