import axios from 'axios'
import countries from './countries.js'

const DISASTERS = 'https://api.reliefweb.int/v1/disasters?appname=omundoagora&profile=full&offset=0&limit=10&preset=latest'

const EARTHQUAKES = 'https://earthquake.usgs.gov/fdsnws/event/1/query?format=geojson&starttime=today'

const DISASTER = 0
const EARTHQUAKE = 1

let affectedCountriesDisasters = []
let affectedCountriesEarthquakes = []

function getDisasters() {
  return axios.get(DISASTERS)
}
function getEarthquakes() {
  return axios.get(EARTHQUAKES)
}

function getDisastersAndEarthquakes() {
  return Promise.all([getDisasters(), getEarthquakes()]).then(result => {
    let disasters = result[DISASTER].data.data
    let earthquakes = result[EARTHQUAKE].data.features
    disasters.forEach((disaster) => {
      let aCountry = countries.find(
        (country) => country.iso3 == disaster.fields.country[0].iso3
      )
      affectedCountriesDisasters.push(aCountry)
    })
    earthquakes.forEach((earthquake) => {
      let place = earthquake.properties.place
      let lat = earthquake.geometry.coordinates[1]
      let lon = earthquake.geometry.coordinates[0]
      let quake = { place, lat, lon }
      affectedCountriesEarthquakes.push(quake)
    })
    return [affectedCountriesDisasters, affectedCountriesEarthquakes]
  })
}



export default getDisastersAndEarthquakes