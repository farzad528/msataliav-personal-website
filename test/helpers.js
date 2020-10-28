const randomString = (length) => {
  const x = 36 ** (length + 1);
  const y = 36 ** length;
  return Math.round(x - (Math.random() * y)).toString(36).slice(1);
};

const pages = [
  {
    route: '/',
    title: 'Natalia Vornic',
    heading: 'ABOUT THIS SITE',
  },
  {
    route: '/about',
    title: 'About | Natalia Vornic',
    heading: 'ABOUT ME',
  },
  {
    route: '/projects',
    title: 'Projects | Natalia Vornic',
    heading: 'PROJECTS',
  },
  {
    route: '/stats',
    title: 'Stats | Natalia Vornic',
    heading: 'STATS',
  },
  {
    route: '/contact',
    title: 'Contact | Natalia Vornic',
    heading: 'CONTACT',
  },
];

export { pages, randomString };
