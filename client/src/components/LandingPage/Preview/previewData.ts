export interface Data {
  img: string
  title: string
  subtitle: string
}

export default [
  {
    img: require('../../../assets/fakepic1.png'),
    title: 'Find People',
    subtitle: 'Find people who are valuable to your project.',
  },
  {
    img: require('../../../assets/fakepic2.png'),
    title: 'Share Ideas',
    subtitle: 'Inspire other people with your side project ideas.',
  },
  {
    img: require('../../../assets/fakepic3.png'),
    title: 'Create a Team',
    subtitle: 'Work together with people who have the right skill set, and start your own team.',
  },
] as Data[];

