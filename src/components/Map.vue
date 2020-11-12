<template>
  <div id="mapid"></div>
</template>

<script>
import 'leaflet/dist/leaflet.css'
import L from 'leaflet'
import earthq from '../assets/earthquake.png'
import gwarming from '../assets/global-warming.png'

const KEY =
  'pk.eyJ1IjoiYWxicmFnYSIsImEiOiJja2dtazk0enkxMjdiMnlxcHBkNGFleHUwIn0.f5gS2r6rRIbYXLg3i-DP1Q'

function map(disasters, earthquakes) {
  let mymap = L.map('mapid').setView([15, 0], 2)

  L.tileLayer(
    'https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}',
    {
      attribution:
        `Map data &copy <a href='https://www.openstreetmap.org/'>OpenStreetMap</a> contributors, <a href='https://creativecommons.org/licenses/by-sa/2.0/'>CC-BY-SA</a>, Imagery © <a href='https://www.mapbox.com/'>Mapbox</a>`,
      //maxZoom: 1,
      id: 'mapbox/streets-v11',
      tileSize: 512,
      zoomOffset: -1,
      accessToken: KEY,
    }
  ).addTo(mymap)

  disasters.forEach((disaster) => {
    let disa = L.icon({ iconUrl: gwarming })
    let marker = L.marker([disaster.lat, disaster.lon], { icon: disa }).addTo(mymap)
    marker.bindPopup(`<b>Desastre:</b><br>${disaster.name}`).openPopup()
  })

  earthquakes.forEach((earthquake) => {
    let earth = L.icon({ iconUrl: earthq })
    let marker = L.marker([earthquake.lat, earthquake.lon], {
      icon: earth,
    }).addTo(mymap)
    marker.bindPopup(`<b>Terremoto:</b><br>${earthquake.place}`).openPopup()
  })
}

export default {
  name: 'Map',
  props: ['earthquakesProps', 'disastersProps'],
  mounted() {
    map(this.disastersProps, this.earthquakesProps)
  }
}
</script>

<style>
#mapid {
  height: 480px;
}
</style>
