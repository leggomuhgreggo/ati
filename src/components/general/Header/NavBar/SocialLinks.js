import React from "react";
import { View, StyleSheet } from "react-native";
import { Text } from "components/primitives";

const SocialLinks = ({ links }) => {
  return (
    <View style={[styles.tagLinks]}>
      {links.map(({ type, href, iconComponent: Icon }) => (
        <View style={styles.linkItem}>
          <Text style={styles.headerText} key={type} href={href}>
            <Icon />
          </Text>
        </View>
      ))}
    </View>
  );
};

export default SocialLinks;

const styles = StyleSheet.create({
  tagLinks: {
    flexDirection: "row",
    paddingHorizontal: 10,
  },
  linkItem: {
    paddingHorizontal: 5,
  },
  headerText: {
    color: "white",
  },
});
