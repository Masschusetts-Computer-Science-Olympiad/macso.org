import { Pin } from '~/components/ui/Pin'
import styles from './IntroSection.module.css'

export function IntroSection() {
  return (
    <section className={styles.intro} aria-label="About MACSO">
      <div className={styles.polaroid}>
        <Pin />
        <img
          src="/images/brand/logov3.webp"
          alt="MACSO logo"
          width={800}
          height={620}
        />
      </div>
      <p>
        The Massachusetts Computer Science Olympiad is a high-school programming
        competition hosted by the leaders of Brookline Computer Science
        Initiative. Our goal is to provide Massachusetts CS students with
        hands-on experience and opportunities to build a network of fellow
        coders through an in-person coding competition.
      </p>
    </section>
  )
}
