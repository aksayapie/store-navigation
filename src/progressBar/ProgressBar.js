import React from 'react';
import { ProgressBar } from '@shopify/polaris/';

const Bar = () => (
  <div className="loading-bar">
    <ProgressBar progress={30} size="small" />
  </div>
);

export default Bar;
