import React, { PureComponent } from "react";
import { Responsive } from "components/utils";
import { Leaderboard, MobileMrec } from "./";
import { BREAKPOINTS } from "constants/index";

export default class ResponsiveLeaderboard extends PureComponent {
  render() {
    const adBreakpoint = BREAKPOINTS.LG;
    return (
      <Responsive>
        {({ minWidth }) => {
          return minWidth(adBreakpoint) ? <Leaderboard /> : <MobileMrec />;
        }}
      </Responsive>
    );
  }
}
