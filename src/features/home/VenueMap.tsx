import { useEffect, useRef } from 'react'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'
import markerIcon from 'leaflet/dist/images/marker-icon.png'
import markerIcon2x from 'leaflet/dist/images/marker-icon-2x.png'
import markerShadow from 'leaflet/dist/images/marker-shadow.png'
import { site } from '~/data/site'
import styles from './VenueMap.module.css'

const venueIcon = L.icon({
  iconUrl: markerIcon,
  iconRetinaUrl: markerIcon2x,
  shadowUrl: markerShadow,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  tooltipAnchor: [16, -28],
  shadowSize: [41, 41],
})

const ATTRIBUTION =
  '&copy; <a href="https://carto.com/">CARTO</a> &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'

export function VenueMap() {
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const container = containerRef.current
    if (!container) return

    const { lat, lng, name, address } = site.venue
    const map = L.map(container, {
      attributionControl: false,
      scrollWheelZoom: false,
    }).setView([lat, lng], 14)

    L.tileLayer('https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png', {
      attribution: '',
    }).addTo(map)

    L.control
      .attribution({ position: 'bottomright', prefix: false })
      .addAttribution(ATTRIBUTION)
      .addTo(map)

    L.marker([lat, lng], { icon: venueIcon })
      .addTo(map)
      .bindPopup(`<b>${name}</b><br>${address}`)
      .openPopup()

    return () => {
      map.remove()
    }
  }, [])

  return (
    <div className={styles.frame}>
      <div
        className={styles.map}
        ref={containerRef}
        role="region"
        aria-label={`Map showing ${site.venue.name}`}
      />
    </div>
  )
}
