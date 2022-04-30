import React from "react";
import RootNavigator from "./src/navigations/RootNavigator";
import { StyleSheet, Text, View, Dimensions } from "react-native";
import { OriginContextProvider } from "./src/contexts/contexts";

const App = () => {
  return (
    <OriginContextProvider>
      <RootNavigator />
    </OriginContextProvider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});

export default App;
