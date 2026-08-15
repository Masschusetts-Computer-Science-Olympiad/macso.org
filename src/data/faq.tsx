import type { ReactNode } from 'react'
import { TextLink } from '~/components/ui/TextLink'
import { site } from './site'

export type FaqItem = {
  readonly question: string
  readonly answer: ReactNode
}

export const faqItems: readonly FaqItem[] = [
  {
    question: 'Who can participate in the competition?',
    answer: (
      <>
        Anyone is welcome to participate this year. There is no qualification
        requirement. Whether you're brand new to competitive programming or have
        competed before, we'd love to have you join us!
      </>
    ),
  },
  {
    question: 'How does the competition work?',
    answer: (
      <>
        MACSO 2026 is a single in-person contest: 6 coding problems, a 2-hour
        contest, competed individually. There's no online qualification stage
        this year, just register and show up!
      </>
    ),
  },
  {
    question: 'What is the scoring system like?',
    answer: (
      <>
        The contest uses the ICPC system: each problem is either solved or not,
        and the time penalty serves as tie breaker.
      </>
    ),
  },
  {
    question: 'When and where is the competition?',
    answer: (
      <>
        MACSO 2026 will take place in late September 2026, from 1:00 PM to 4:00
        PM at 101 Rogers Street, Cambridge, MA 02142. Please arrive by 12:45 PM
        so we can get everyone checked in before the contest begins. Prizes will
        be awarded to our top competitors, just like last year!
      </>
    ),
  },
  {
    question: 'How can I register for the competition?',
    answer: (
      <>
        You can register by clicking the Registration Form button at the top of
        the page, or directly through the{' '}
        <TextLink href={site.registrationForm}>registration form</TextLink>{' '}
        where you can fill in your details.
      </>
    ),
  },
  {
    question: 'Can I participate if I’m not in Massachusetts?',
    answer: (
      <>
        Yes! Anyone is welcome and there is no qualification requirement. This
        year’s contest is in person, so you’ll just need to make it to Cambridge
        in late September.
      </>
    ),
  },
]
