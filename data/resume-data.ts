export const RESUME_DATA = {
  name: 'Miguel Almeida',
  initials: 'MA',
  location: {
    name: 'Porto, Portugal',
    link: 'https://www.google.com/maps/place/porto',
  },
  position: 'Front-end developer',
  summary:
    'Front-end developer with 6+ years of experience working mostly with Typescript and Next.js. Experienced in implementing designs, optimizing web performance and managing state for scalable, maintainable applications. I keep up with the latest front-end trends and explore new tools to continually expand my skill set.',
  avatarUrl: 'https://github.com/miguelvalmeida.png',
  contact: {
    social: {
      github: 'https://github.com/miguelvalmeida',
      linkedIn: 'https://www.linkedin.com/in/miguelvalmeida',
    },
  },
  education: {
    university: 'University of Aveiro',
    degree: "Bachelor's degree in New Communications and Technologies",
    start: '2015',
    end: '2018',
  },
  work: [
    {
      company: 'Mindera',
      link: 'https://mindera.com/',
      title: 'Front-end developer',
      start: '2018',
      end: '',
      description:
        'At Mindera, i’ve had the opportunity to work with clients like Trainline and Instant Group, contributing to various projects to meet client goals and requirements.',
      clients: [
        {
          name: 'Trainline',
          description:
            'Worked for 5 years across multiple teams, ranging from the main train ticket-selling site to post-sales and help desk platforms. Primarily worked with Typescript, React, Redux, and Node.js.',
        },
        {
          name: 'Instant Group',
          description:
            'Working in a team to build a new website for searching, booking and managing workspaces. Using technologies like TypeScript, Tailwind CSS and Next.js, we are leveraging the latest features in React such as React Server Components and Server Actions.',
        },
      ],
    },
  ],
  skills: ['TypeScript', 'React', 'Next.js', 'Tailwind CSS', 'Node.js'],
  languages: [
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'English', flag: '🇬🇧' },
  ],
} as const
