export const RESUME_DATA = {
  name: 'Miguel Almeida',
  initials: 'MA',
  location: {
    name: 'Porto, Portugal',
    link: 'https://www.google.com/maps/place/porto',
  },
  position: 'Front-end developer',
  summary:
    'As a front-end developer with 5+ years of experience, i focus on Typescript and React. I’m passionate about building clean, intuitive, and responsive user interfaces. I like to keep up with front-end trends and try out new tech to level up my skills.',
  avatarUrl: 'https://github.com/miguelvalmeida.png',
  contact: {
    email: 'miguelvalmeida26@gmail.com',
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
        'I have been in Mindera for more than 5 years now and, since then, I have had the chance to work for clients like Trainline and Instant Group.',
      clients: [
        {
          name: 'Trainline',
          description:
            'Worked across various teams and parts of the business helping to build new features, ranging from the main train ticket-selling website, to the post-sales and help desk websites. I worked mostly with TypeScript, React, Redux and Node.js.',
        },
        {
          name: 'Instant Group',
          description:
            'Working in a team with the goal of building a brand new website with the ability to search, book and manage workspaces. Using technologies like TypeScript, Tailwind CSS and Next.js, we are leveraging the latest features in React such as React Server Components and Server Actions.',
        },
      ],
    },
  ],
  skills: [
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
    'Playwright',
  ],
  languages: [
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'English', flag: '🇬🇧' },
  ],
} as const
