import React from "react";
import { View, StyleSheet } from "react-native";

import { HOME_LINK } from "constants/index.js";

const LOGO_DIMS = {
  WIDTH: 38,
  HEIGHT: 50,
};

const Logo = () => (
  <View
    accessibilityLabel={HOME_LINK.text}
    accessibilityRole="link"
    href={HOME_LINK.href}
    style={styles.wrap}
  >
    <svg fill="white" viewBox="0 0 195.3 158.4">
      <path d="M130.1 42.4V16L90.9 56.4c-1.6-2.1-3.4-4-5.5-5.7-8-6.5-18.5-9.7-31.7-9.7-12.2 0-22.3 3.2-30.4 9.5-8.1 6.3-12.3 14.3-12.7 23.8h20.3c.9-4.7 3.4-8.5 7.4-11.3 4-2.8 9-4.2 14.8-4.2 7.2 0 12.9 1.6 16.8 4.9 4 3.3 5.9 8 5.9 14.2v8.4L46.6 88c-13.4.9-23.7 4-30.8 9.4-7.1 5.4-10.6 12.8-10.6 22.2 0 9.6 3.4 17.4 10.2 23.3 6.8 5.9 15.6 8.8 26.4 8.8 7.4 0 14.3-1.7 20.5-5.2 6.2-3.5 10.8-8.1 13.8-14h.5v18.1h20.7V76.4c0-6.1-1.3-11.6-3.9-16.3h15.8v62.3c0 10.3 2.5 17.7 7.6 22.2 5.1 4.4 13.4 6.7 25.1 6.7 3.5 0 7.2-.4 11.3-1.1v-17.5c-3.3.3-5.9.5-7.8.5-5.2 0-9.1-1.3-11.5-3.9-2.4-2.6-3.6-6.7-3.6-12.2v-57h35.5v90.6h21.7V42.4h-57.4zM75.8 110c0 7.1-2.7 13-8.1 17.6-5.4 4.6-12.1 6.9-20.2 6.9-6.3 0-11.2-1.4-15-4.1-3.7-2.8-5.6-6.5-5.6-11.1 0-9.7 7.5-15 22.4-16l26.3-1.8v8.5zM176.5 31.5c3.5 0 6.5-1.2 9-3.6 2.5-2.4 3.7-5.4 3.7-8.8 0-3.5-1.2-6.5-3.7-8.9-2.5-2.4-5.5-3.6-9-3.6s-6.5 1.2-9 3.6c-2.5 2.4-3.7 5.4-3.7 8.9s1.2 6.4 3.7 8.8c2.5 2.4 5.5 3.6 9 3.6z" />
    </svg>
  </View>
);

export default Logo;

const styles = StyleSheet.create({
  wrap: {
    width: LOGO_DIMS.WIDTH,
    height: LOGO_DIMS.HEIGHT,
    marginHorizontal: 10,
    alignItems: "center",
    justifyContent: "center",
    transform: [{ translateY: -LOGO_DIMS.HEIGHT * 0.05 }],
  },
  headerText: {
    color: "white",
  },
});
