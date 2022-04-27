import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component } from "react";
import { mapStyle } from "../global/mapStyle";
import MapView, { PROVIDER_GOOGLE } from "react-native-maps";
import { colors, parameters } from "../global/styles";

export default class MapComponent extends Component {
  render() {
    return (
      <View>
        <MapView
          style={styles.map}
          provider={PROVIDER_GOOGLE}
          customMapStyle={mapStyle}
        ></MapView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  map: {
    height: "100%",
    width: "100%",
  },
});
