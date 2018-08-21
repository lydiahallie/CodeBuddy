import React from 'react';
import { FOOTER_CONTENT } from './footerContent';

export const FooterWrapper = () => (
  <div className='footer'>
    {FOOTER_CONTENT.map(block => (
      <div className="footer-col">
        <h3>{block.name}</h3>
        {block.links.map(link => <a href={link.url}>{link.name}</a>)}
      </div>
    ))}
  </div>
);