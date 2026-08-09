import { Pin } from '~/components/ui/Pin'
import { Section } from '~/components/ui/Section'
import { founders, judge, staff, type Person } from '~/data/team'
import { site } from '~/data/site'
import typography from '~/styles/typography.module.css'
import styles from './TeamSection.module.css'

function Avatar({ person }: { person: Person }) {
  const img = (
    <img
      className={styles.avatar}
      src={person.photo}
      alt={person.name}
      width={300}
      height={300}
      loading="lazy"
      decoding="async"
    />
  )

  if (!person.href) return img

  return (
    <a
      href={person.href}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`${person.name} (opens in a new tab)`}
    >
      {img}
    </a>
  )
}

function PersonCard({ person, wide }: { person: Person; wide?: boolean }) {
  return (
    <div className={wide ? `${styles.person} ${styles.judge}` : styles.person}>
      <Pin />
      <Avatar person={person} />
      <p className={styles.name}>{person.name}</p>
      <p className={styles.role}>{person.role}</p>
      {person.bio && (
        <details className={styles.bio}>
          <summary>read her bio &darr;</summary>
          <p>{person.bio}</p>
        </details>
      )}
    </div>
  )
}

function PeopleRow({ people }: { people: readonly Person[] }) {
  return (
    <div className={styles.people}>
      {people.map((person) => (
        <PersonCard key={person.name} person={person} />
      ))}
    </div>
  )
}

export function TeamSection() {
  return (
    <Section id="team" title="Meet the Team">
      <p className={typography.lede}>
        We are a group of students at Brookline High School passionate about
        computer science. Our goal is to give aspiring programmers in
        Massachusetts an experience beyond the school curriculum.
      </p>
      <a
        className={styles.instagram}
        href={site.instagram}
        target="_blank"
        rel="noopener noreferrer"
      >
        <img
          src="/images/logos/instagram.svg"
          alt=""
          width={20}
          height={20}
          decoding="async"
        />
        {site.instagramHandle}
      </a>

      <PeopleRow people={staff} />

      <h3 className={typography.subhead}>the founders</h3>
      <PeopleRow people={founders} />

      <h3 className={typography.subhead}>the judge</h3>
      <div className={styles.people}>
        <PersonCard person={judge} wide />
      </div>
    </Section>
  )
}
