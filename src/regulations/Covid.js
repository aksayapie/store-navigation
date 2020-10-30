import React from 'react';
import { Button } from '@shopify/polaris';
import { FaArrowLeft, FaTimes } from 'react-icons/fa';
import './Covid.scss';

function Covid() {
  return (
    <div>
      <div className="header">
        <Button>
          <FaArrowLeft className="back-button" />
        </Button>
        <Button>
          <FaTimes className="exit-button" />
        </Button>
      </div>

      <div className="content">
        <div className="main-text">COVID-19 Policies</div>
        <div className="sub-text">
          To protect our members and employees, all Costco members and guests
          must wear a face covering that covers their mouth and nose at all
          times while at Costco.
        </div>
        <Button>
          <div className="back">Back</div>
        </Button>
        <Button>
          <div className="start">Start Shopping</div>
        </Button>
      </div>
    </div>
  );
}

export default Covid;
