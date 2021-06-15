<template>
  <div id="map"></div>
</template>

<script>
import Vue from "vue";
import mapboxgl from "mapbox-gl";

export default Vue.extend({
  name: "Map",
  data() {
    return {
      map: null,
      center: [12.3731, 51.3397],
      zoom: 12,
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
  },
  methods: {
    initControls() {
      this.navigationControl = new mapboxgl.NavigationControl();
      this.map.addControl(this.navigationControl, "top-right");
    },
  },
});
</script>

<style scoped>
#map {
  height: 80vh;
}
</style>
