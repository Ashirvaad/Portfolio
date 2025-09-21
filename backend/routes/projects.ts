export default function handler(req: any, res: any) {
  const projects = [
    {
      id: 1,
      name: 'Project One',
      description: 'Awesome project description',
      image: 'C:\Users\welcom\Desktop\Projects\Portfolio\portfolio\images\project1.png',
      github: 'https://github.com/username/project1',
      demo: 'https://project1-demo.vercel.app'
    },
    {
      id: 2,
      name: 'Project Two',
      description: 'Another cool project',
      image: '/images/project1.png',
      github: 'https://github.com/username/project2'
    },
  ];
  res.status(200).json(projects);
}
