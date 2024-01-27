import type { Metadata } from 'next'
import {
  DownloadIcon,
  ExternalLinkIcon,
  GlobeIcon,
  MailIcon,
} from 'lucide-react'

import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar'
import { Card, CardHeader, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { GithubIcon } from '@/components/icons/github-icon'
import { LinkedInIcon } from '@/components/icons/linkedin-icon'
import { ThemeToggle } from '@/components/theme-toggle'
import { Print } from '@/components/print'
import { RESUME_DATA } from '@/data/resume-data'

export const metadata: Metadata = {
  title: `${RESUME_DATA.name} | ${RESUME_DATA.position}`,
  description: RESUME_DATA.summary,
}

export default function Page() {
  return (
    <main className="container relative mx-auto scroll-my-12 overflow-auto p-4 md:p-16 print:p-12">
      <section className="mx-auto w-full max-w-2xl space-y-8 bg-background print:space-y-6">
        <div className="flex items-center justify-between">
          <div className="flex-1 space-y-1.5">
            <h1 className="text-2xl font-bold">{RESUME_DATA.name}</h1>
            <a
              className="max-w-md pt-1 items-center text-pretty font-mono text-xs text-muted-foreground inline-flex gap-x-1.5 align-baseline leading-none hover:underline"
              href={RESUME_DATA.location.link}
              target="_blank"
            >
              <GlobeIcon className="size-3" />
              {RESUME_DATA.location.name}
            </a>
            <div className="flex gap-x-1 text-muted-foreground print:hidden">
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={`mailto:${RESUME_DATA.contact.email}`}>
                  <MailIcon className="size-4" />
                  <span className="sr-only">
                    Send a mail to ${RESUME_DATA.name}
                  </span>
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={RESUME_DATA.contact.social.github} target="__blank">
                  <GithubIcon className="size-4" />
                </a>
              </Button>
              <Button className="size-8" variant="outline" size="icon" asChild>
                <a href={RESUME_DATA.contact.social.linkedIn} target="__blank">
                  <LinkedInIcon className="size-4" />
                </a>
              </Button>
            </div>
            <div className="hidden flex-col gap-x-1 font-mono text-sm text-muted-foreground print:flex">
              <p>
                Email:{' '}
                <span className="underline">{RESUME_DATA.contact.email}</span>
              </p>
              <p>
                Github:{' '}
                <span className="underline">
                  {RESUME_DATA.contact.social.github}
                </span>
              </p>
              <p>
                LinkedIn:{' '}
                <span className="underline">
                  {RESUME_DATA.contact.social.linkedIn}
                </span>
              </p>
            </div>
          </div>
          <Avatar className="size-28 rounded-xl">
            <AvatarImage alt={RESUME_DATA.name} src={RESUME_DATA.avatarUrl} />
            <AvatarFallback className="rounded-xl">
              {RESUME_DATA.initials}
            </AvatarFallback>
          </Avatar>
        </div>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">About</h2>
          <p className="text-pretty font-mono text-sm text-muted-foreground">
            {RESUME_DATA.summary}
          </p>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Work Experience</h2>
          {RESUME_DATA.work.map((work) => (
            <Card key={work.company}>
              <CardHeader>
                <div className="flex items-center justify-between gap-x-2 text-base">
                  <h3 className="font-semibold leading-none">
                    <a
                      className="hover:underline flex items-center gap-1"
                      href={work.link}
                      target="__blank"
                    >
                      {work.company}
                      <ExternalLinkIcon className="size-4 print:hidden" />
                    </a>
                  </h3>
                  <div className="text-sm tabular-nums text-muted-foreground">
                    {work.start} - {work.end.length ? work.end : 'Present'}
                  </div>
                </div>
                <h4 className="font-mono text-sm leading-none">{work.title}</h4>
              </CardHeader>
              <CardContent className="mt-2 text-xs space-y-4">
                <p>{work.description}</p>
                {work.projects.map((project) => (
                  <div key={project.name} className="space-y-2">
                    <h5 className="font-bold">{project.name}</h5>
                    <p>{project.description}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
          ))}
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Education</h2>
          <Card>
            <CardHeader className="flex flex-row items-center justify-between gap-x-2 text-base">
              <h3 className="font-semibold leading-none">
                {RESUME_DATA.education.university}
              </h3>
              <div className="text-sm tabular-nums text-muted-foreground">
                {RESUME_DATA.education.start} - {RESUME_DATA.education.end}
              </div>
            </CardHeader>
            <CardContent className="mt-2">
              {RESUME_DATA.education.degree}
            </CardContent>
          </Card>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Skills & Technologies</h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.skills.map((skill) => (
              <Badge key={skill}>{skill}</Badge>
            ))}
          </div>
        </section>
        <section className="flex min-h-0 flex-col gap-y-3">
          <h2 className="text-xl font-bold">Languages</h2>
          <div className="flex flex-wrap gap-2">
            {RESUME_DATA.languages.map((language) => (
              <Badge
                key={language.name}
                variant="secondary"
                className="flex gap-1"
              >
                <span>{language.name}</span>
                <span className="print:hidden">{language.flag}</span>
              </Badge>
            ))}
          </div>
        </section>
        <footer className="flex justify-end gap-x-2 print:hidden text-muted-foreground">
          <Button className="size-8" variant="outline" size="icon" asChild>
            <a href="/files/cv-miguelvalmeida.pdf" download>
              <DownloadIcon className="size-4" />
              <span className="sr-only">Download CV</span>
            </a>
          </Button>
          <Print />
          <ThemeToggle />
        </footer>
      </section>
    </main>
  )
}
