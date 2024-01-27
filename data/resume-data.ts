export const RESUME_DATA = {
  name: 'Miguel Almeida',
  initials: 'MA',
  location: 'Porto, Portugal',
  locationLink: 'https://www.google.com/maps/place/porto',
  position: 'Front End Developer',
  summary:
    "As a Front End Developer, I've collaborated with various teams to develop new products and features. I actively stay updated with the latest trends in the Front End world and enjoy experimenting with new technologies. With over 5 years of experience, my current focus revolves around TypeScript and React.",
  avatarUrl: 'https://github.com/miguelvalmeida.png',
  personalWebsiteUrl: 'https://miguelvalmeida.me',
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
      title: 'Front End Developer',
      start: '2018',
      end: '',
      description:
        'I have been in Mindera for more than 5 years now and, since then, I have had the chance to work for companies like Trainline and Instant Group.',
      projects: [
        {
          name: 'Trainline',
          description:
            'Had the opportunity to work across various teams and parts of the business, ranging from the main train ticket-selling website, to the post-sales and help desk websites. I worked mostly with TypeScript, React, Redux and Node.js.',
        },
        {
          name: 'Instant Group',
          description:
            'Currently part of a team tasked with building a brand new website that will have the ability to search, book and manage workspaces. Using technologies such as TypeScript, Tailwind CSS and Next.js, leveraging the latest features in React such as React Server Components and Server Actions.',
        },
      ],
    },
  ],
  skills: [
    'JavaScript',
    'TypeScript',
    'React',
    'Next.js',
    'Tailwind CSS',
    'Node.js',
  ],
  languages: [
    { name: 'Portuguese', flag: '🇵🇹' },
    { name: 'English', flag: '🇬🇧' },
  ],
} as const
