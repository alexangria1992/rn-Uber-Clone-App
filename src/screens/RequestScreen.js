import React from "react";
import { StyleSheet, Text, View } from "react-native";
import MapComponent from "../components/MapComponent";
import { colors, parameters } from "../global/styles";

export default function RequestScreen() {
  return (
    <View style={styles.container}>
      <MapComponent />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    paddingTop: parameters.statusBarHeight,
  },
});
