export interface Project {
  title: string;
  year: number;
  description: string;
  url: string;
  tools: string[];
}

export const projects: Project[] = [
  {
    title: 'Trip to Kailash',
    year: 2023,
    description:
      'Explore seamless tour reservations, captivating itineraries, and a user-friendly interface. Your spiritual journey begins here, where technology meets transcendence.',
    url: 'https://www.mtkailashtrip.com/',
    tools: ['Strapi', 'NextJs', 'TS', 'Docker', 'Postgres', 'Node'],
  },
  {
    title: 'JobHub',
    year: 2022,
    description:
      'JobHub is a cutting-edge platform designed to mirror the features of LinkedIn, leveraging advanced technologies to elevate user experience and functionality.',
    url: 'https://github.com/trylow10/jobhub',
    tools: [
      'React',
      'CSS',
      'Typescript',
      'Elasticsearch',
      'MongoDB',
      'Node.js',
      'ImageKit SDK',
    ],
  },
  {
    title: 'Crop and Fertilizer Prediction',
    year: 2021,
    description:
      'Crop Fertilizer Prediction is a Python application that utilizes the Random Forest algorithm for predicting the optimal fertilizer for crops.',
    url: 'https://github.com/trylow10/Crop-fertilizer-prediction',
    tools: ['Python', 'Random Forest', 'Data Science', 'Machine Learning'],
  },
];
