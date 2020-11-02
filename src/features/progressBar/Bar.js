import React from 'react';
import { ProgressBar } from '@shopify/polaris/';
import './Bar.scss';

function Bar() {
  return (
    <div className="loading-bar">
      <ProgressBar progress={30} size="small" />
    </div>
  );
}

export default Bar;
