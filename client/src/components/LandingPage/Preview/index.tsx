import * as React from 'react';
import PREVIEW_DATA from './previewData';
import { Data } from './previewData';

export default () => (
  <div className="preview-images">
    {PREVIEW_DATA.map((item: Data, i: number) => (
      <div className="image-wrapper">
        <img src={item.img} alt="first" id={`img-${i + 1}`} />
        <h3>{item.title}</h3>
        <div id="img-line" />
        <h5>{item.subtitle}</h5>
      </div>
    ))}
  </div>
);

