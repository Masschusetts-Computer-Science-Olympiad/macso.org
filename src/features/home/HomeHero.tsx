import { Button } from '~/components/ui/Button'
import {
  Hero,
  HeroActions,
  HeroStatus,
  HeroTitle,
  Highlight,
} from '~/components/ui/Hero'
import { ChatIcon, PencilIcon } from '~/components/ui/icons'
import animations from '~/styles/animations.module.css'
import { site } from '~/data/site'
import styles from './HomeHero.module.css'

export function HomeHero() {
  return (
    <Hero>
      <HeroTitle>
        Massachusetts Computer Science <Highlight>Olympiad</Highlight>
      </HeroTitle>
      <HeroStatus label="MACSO 2026" value="August 21, 2026" />
      <HeroActions>
        <Button href={site.registrationForm}>
          <PencilIcon />
          Registration Form
        </Button>
        <Button href={site.discord} variant="ghost">
          <ChatIcon />
          Discord Server
        </Button>
      </HeroActions>
      <p className={`${styles.ps} ${animations.rise4}`}>
        p.s. we're hiring!{' '}
        <a href="/careers/">join the MACSO leadership team &rarr;</a>
      </p>
    </Hero>
  )
}
