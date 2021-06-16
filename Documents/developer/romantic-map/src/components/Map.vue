<template>
  <div id="map"></div>
</template>

<script>
import Vue from "vue";
import mapboxgl from "mapbox-gl";
import icon from "@/assets/love-2.png";

export default Vue.extend({
  name: "Map",
  data() {
    return {
      map: null,
      center: [12.3731, 51.3397],
      zoom: 12,
      position: null,
      navigationControl: null,
      geolocateControl: null,
      icon,
    };
  },
  mounted() {
    mapboxgl.accessToken =
      "pk.eyJ1IjoiaW5wcmFpc2VvZmJvcmVkb20iLCJhIjoiY2twY2Niem82MGpxcTJ2cnJsM2dqZjlrYyJ9.2Pgr3XNKf1M69FFcnaeJgg";

    this.map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/mapbox/dark-v10",
      center: this.center,
      zoom: this.zoom,
    });

    this.initControls();

    this.addMarkers();
  },

  methods: {
    initControls() {
      this.navigationControl = new mapboxgl.NavigationControl();
      this.map.addControl(this.navigationControl, "top-right");

      this.geolocateControl = new mapboxgl.GeolocateControl({
        positionOptions: {
          enableHighAccuracy: true,
        },
        trackUserLocation: true,
      });
      this.map.addControl(this.geolocateControl, "top-right");
      this.geolocateControl.on("geolocate", (e) => {
        const lon = e.coords.longitude;
        const lat = e.coords.latitude;
        this.position = [lon, lat];
      });
    },

    addMarkers() {
      const geojson = {
        type: "FeatureCollection",
        features: [
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.345962493480547, 51.33466755266844],
            },
            properties: {
              title: "Pavillion im Palmgarten",
              description:
                "A small, but neat pavillion with a wonderful view to Palmgarten",
              category: "nature",
            },
          },
          {
            type: "Feature",
            geometry: {
              type: "Point",
              coordinates: [12.350211394318645, 51.33703079939178],
            },
            properties: {
              title: "ZierlichManierlich",
              description: "A cute little mobile shop with snacks and drinks",
              category: "cafe",
            },
          },
        ],
      };

      geojson.features.forEach((marker) => {
        const el = document.createElement("img");
        el.style.width = "30px";
        el.style.height = "30px";
        el.style.cursor = "pointer";
        el.src = this.icon;

        new mapboxgl.Marker(el)
          .setLngLat(marker.geometry.coordinates)
          .addTo(this.map);
      });
    },
  },
});
</script>

<style scoped>
#map {
  height: 80vh;
}
</style>
