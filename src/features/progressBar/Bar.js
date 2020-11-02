import React from 'react';
import { ProgressBar } from '@shopify/polaris/';
import PropTypes from 'prop-types';
import './Bar.scss';

function Bar({ setProgBarProp }) {
  return (
    <div className="loading-bar">
      <ProgressBar progress={setProgBarProp} size="small" />
    </div>
  );
}

Bar.propTypes = {
  setProgBarProp: PropTypes.number.isRequired,
};

export default Bar;
