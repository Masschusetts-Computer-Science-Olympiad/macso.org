import { StrictMode, type ReactNode } from 'react'
import { createRoot } from 'react-dom/client'

export function renderPage(page: ReactNode) {
  const root = document.getElementById('root')

  if (!root) {
    throw new Error('Unable to mount the page: the #root element is missing.')
  }

  createRoot(root).render(<StrictMode>{page}</StrictMode>)
}
