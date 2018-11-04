interface Link {
  name: string 
  url: string 
}

interface Content {
  name: string
  links: Link[]
}

const FOOTER_CONTENT: Content[] = [
  {
    name: 'About',
    links: [
      { name: 'Blog', url: '/' },
      { name: 'GitHub', url: '/' },
      { name: 'Contact Us', url: '/' },
    ],
  },
  {
    name: 'Social',
    links: [
      { name: 'Twitter', url: '/' },
      { name: 'Instagram', url: '/' },
      { name: 'Slack', url: '/' },
    ],
  },
];

export default FOOTER_CONTENT;
