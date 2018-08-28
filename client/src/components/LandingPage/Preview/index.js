import React from 'react';
import { PREVIEW_DATA } from './previewData';

export const Preview = () => (
  <div className="preview-images">
    {PREVIEW_DATA.map((item, i) => (
      <div className="image-wrapper">
        <img src={item.img} alt="first" id={`img-${i + 1}`} />
        <h3>{item.title}</h3>
        <div id="img-line" />
        <h5>{item.subtitle}</h5>
      </div>
    ))}
  </div>
);
