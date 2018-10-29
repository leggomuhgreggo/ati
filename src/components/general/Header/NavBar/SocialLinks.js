import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";

const SocialLinks = ({ links }) => {
  return (
    <View style={[styles.tagLinks]}>
      {links.map(({ type, href, iconComponent: Icon }) => (
        <Text style={styles.headerText} key={type} href={href}>
          <Icon />
        </Text>
      ))}
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  tagLinks: {
    flexDirection: "row",
  },
  linkItem: {
    paddingHorizontal: 10,
  },
  headerText: {
    color: "white",
  },
});
