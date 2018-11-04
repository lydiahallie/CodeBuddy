import fakepic1 from '../../../assets/fakepic1.png';
import fakepic2 from '../../../assets/fakepic2.png';
import fakepic3 from '../../../assets/fakepic3.png';

export interface Data {
  img: string
  title: string
  subtitle: string
}

export default [
  {
    img: fakepic1,
    title: 'Find People',
    subtitle: 'Find people who are valuable to your project.',
  },
  {
    img: fakepic2,
    title: 'Share Ideas',
    subtitle: 'Inspire other people with your side project ideas.',
  },
  {
    img: fakepic3,
    title: 'Create a Team',
    subtitle: 'Work together with people who have the right skill set, and start your own team.',
  },
] as Data[];

