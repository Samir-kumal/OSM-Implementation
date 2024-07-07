import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import MapLibreGL, { MapView, RasterSource } from '@maplibre/maplibre-react-native';

// Will be null for most users (only Mapbox authenticates this way).
// Required on Android. See Android installation notes.
MapLibreGL.setAccessToken(null);

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  map: {
    flex: 1,
    alignSelf: 'stretch',
  },
});

export default class App extends Component {
  render() {
    return (
      <View style={styles.page}>
        <MapView
          style={styles.map}
          logoEnabled={false}
          styleURL="https://api.maptiler.com/maps/openstreetmap/style.json?key=8P7TgUWT5JtUUmMMgtga"
        >
          {/* <RasterSource tileUrlTemplates={["https://api.maptiler.com/tiles/jp-forest/{z}/{x}/{y}.png?key=8P7TgUWT5JtUUmMMgtga"]} /> */}

          <MapLibreGL.RasterSource attribution='© OpenStreetMap contributors'
            id="osm"
            tileSize={256}
            tileUrlTemplates={["https://api.maptiler.com/tiles/satellite-mediumres-2018/{z}/{x}/{y}.jpg?key=8P7TgUWT5JtUUmMMgtga"]}>
            <MapLibreGL.RasterLayer id="osmLayer" sourceID="osm" />
          </MapLibreGL.RasterSource>
        </MapView>
      </View>
    );
  }
}