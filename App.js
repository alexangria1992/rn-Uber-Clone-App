import React from "react";
import RootNavigator from "./src/navigations/RootNavigator";
import { StyleSheet, Text, View, Dimensions } from "react-native";

export default function App() {
  return <RootNavigator />;
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
