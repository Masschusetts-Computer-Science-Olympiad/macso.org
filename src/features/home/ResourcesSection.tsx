import { Section } from '~/components/ui/Section'
import { TextLink } from '~/components/ui/TextLink'
import typography from '~/styles/typography.module.css'

export function ResourcesSection() {
  return (
    <Section id="resources" title="Want to practice?">
      <p className={typography.lede}>
        To learn the algorithms and data structures for MACSO, you can use
        websites like{' '}
        <TextLink href="https://usaco.guide/">USACO Guide</TextLink> or{' '}
        <TextLink href="https://cp-algorithms.com/index.html">
          Algorithms for Competitive Programming
        </TextLink>
        .
      </p>
    </Section>
  )
}
