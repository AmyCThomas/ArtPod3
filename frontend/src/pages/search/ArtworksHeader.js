import React from 'react';
import UndertheWave from './images/UndertheWave.jpg';

const ArtworksHeader = () => (
  <div className="d-flex flex-row">
    <div className="my-5 col-8">
      <img src={UndertheWave} alt="Under the Wave" className="col-10" />
    </div>
    <div className="mt-5 col-6">
      <h2 className="text-start">Art Institute of Chicago</h2>
    </div>
  </div>
);

export default ArtworksHeader;
