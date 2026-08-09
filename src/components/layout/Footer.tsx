import { site } from '~/data/site'
import { TextLink } from '~/components/ui/TextLink'
import { type PageId, pageMeta } from './pages'
import styles from './Footer.module.css'

type FooterProps = {
  page: PageId
}

export function Footer({ page }: FooterProps) {
  const { topId } = pageMeta[page]

  return (
    <footer className={styles.footer}>
      <p>
        Massachusetts Computer Science Olympiad (MACSO) is organized through
        Brookline Computer Science Initiative (BCSI), a 501(c)(3) non-profit
        organization.
      </p>
      <p>
        Directed by{' '}
        <TextLink
          className={styles.creditLink}
          href={site.credits.mishaZhernevskii}
        >
          Mikhail Zhernevskii
        </TextLink>
        , Jun 2024 - October 2024
      </p>
      <p>
        Website is made by{' '}
        <TextLink className={styles.creditLink} href={site.credits.lucasChen}>
          Lucas Chen
        </TextLink>{' '}
        and{' '}
        <TextLink
          className={styles.creditLink}
          href={site.credits.mishaZhernevskii}
        >
          Misha Zhernevskii
        </TextLink>
      </p>
      <p className={styles.note}>
        <a className={styles.topLink} href={`#${topId}`}>
          &uarr; back to top
        </a>
      </p>
    </footer>
  )
}
