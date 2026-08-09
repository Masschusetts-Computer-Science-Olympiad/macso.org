import { Pin } from '~/components/ui/Pin'
import type { Tile } from '~/data/sponsors'
import styles from './TileGrid.module.css'

type TileGridProps = {
  tiles: readonly Tile[]
  wide?: boolean
}

export function TileGrid({ tiles, wide = false }: TileGridProps) {
  return (
    <div className={styles.tiles}>
      {tiles.map((tile) => (
        <a
          className={wide ? `${styles.tile} ${styles.wide}` : styles.tile}
          href={tile.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={`${tile.name} (opens in a new tab)`}
          key={tile.name}
        >
          <Pin small />
          <img
            src={tile.logo}
            alt={tile.name}
            loading="lazy"
            decoding="async"
          />
          <span>{tile.name}</span>
        </a>
      ))}
    </div>
  )
}
