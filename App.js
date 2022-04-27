import React from "react";
import RootNavigator from "./src/navigations/RootNavigator";
import { StyleSheet, Text, View, Dimensions } from "react-native";

const App = () => {
  return <RootNavigator />;
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
