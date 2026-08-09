import { useEffect, useState } from 'react'
import { navLinks } from '~/data/site'
import { applyTheme, getPreferredTheme, saveTheme } from '~/lib/theme'
import { type PageId, pageMeta } from './pages'
import styles from './Header.module.css'

type HeaderProps = {
  page: PageId
}

export function Header({ page }: HeaderProps) {
  const [theme, setTheme] = useState(getPreferredTheme)
  const { topId } = pageMeta[page]
  const isHome = page === 'home'
  const hashBase = isHome ? '' : '/'

  useEffect(() => {
    applyTheme(theme)
  }, [theme])

  function toggleTheme() {
    const nextTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(nextTheme)
    saveTheme(nextTheme)
  }

  return (
    <header className={styles.header} id={topId}>
      <a className={styles.brand} href={isHome ? '#notebook-top' : '/'}>
        macso<span>.</span>
      </a>
      <nav className={styles.nav} aria-label="Main">
        {navLinks.map(({ label, hash }) => (
          <a key={hash} href={`${hashBase}${hash}`}>
            {label}
          </a>
        ))}
        <button
          className={styles.themeButton}
          type="button"
          onClick={toggleTheme}
          aria-pressed={theme === 'dark'}
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
        >
          {theme === 'light' ? (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M16.7 12.8A7 7 0 0 1 7.2 3.3 7 7 0 1 0 16.7 12.8Z" />
            </svg>
          ) : (
            <svg viewBox="0 0 20 20" aria-hidden="true">
              <path d="M10 2v2M10 16v2M2 10h2M16 10h2M4.3 4.3l1.4 1.4M14.3 14.3l1.4 1.4M15.7 4.3l-1.4 1.4M5.7 14.3l-1.4 1.4M14 10a4 4 0 1 1-8 0 4 4 0 0 1 8 0Z" />
            </svg>
          )}
        </button>
        <a
          className={styles.hire}
          href="/careers/"
          aria-current={page === 'careers' ? 'page' : undefined}
        >
          We're hiring &rarr;
        </a>
      </nav>
    </header>
  )
}
