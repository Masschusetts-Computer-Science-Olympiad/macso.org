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

const TILE_URLS = {
  light: 'https://basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png',
  dark: 'https://basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png',
} as const

function getTileUrl() {
  return document.documentElement.dataset.theme === 'dark'
    ? TILE_URLS.dark
    : TILE_URLS.light
}

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

    let currentTileUrl = getTileUrl()
    const tileLayer = L.tileLayer(currentTileUrl, {
      attribution: '',
    }).addTo(map)

    const themeObserver = new MutationObserver(() => {
      const nextTileUrl = getTileUrl()
      if (nextTileUrl === currentTileUrl) return

      currentTileUrl = nextTileUrl
      tileLayer.setUrl(currentTileUrl)
    })

    themeObserver.observe(document.documentElement, {
      attributes: true,
      attributeFilter: ['data-theme'],
    })

    L.control
      .attribution({ position: 'bottomright', prefix: false })
      .addAttribution(ATTRIBUTION)
      .addTo(map)

    L.marker([lat, lng], { icon: venueIcon })
      .addTo(map)
      .bindPopup(`<b>${name}</b><br>${address}`)
      .openPopup()

    return () => {
      themeObserver.disconnect()
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
