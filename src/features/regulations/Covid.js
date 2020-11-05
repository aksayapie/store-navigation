import React from 'react';
import PropTypes from 'prop-types';
import {
  Tooltip, Button, Thumbnail, Icon,
} from '@shopify/polaris';
import { CircleInformationMajor } from '@shopify/polaris-icons';
import './Covid.scss';
import face from './face.png';
import distance from './distance.png';
import shopping from './shopping.png';

function Covid({ setShowCovidProp, setShowShopModeProp }) {
  const toNextScreen = () => {
    setShowShopModeProp(true);
    setShowCovidProp(false);
  };
  return (
    <div className="content">
      <h1>COVID-19 Policies</h1>
      <h2>
        Costco is firmly committed to helping protect the health and
        safety of our members and employees, and to serving our communities.
      </h2>
      <div className="face-covering">
        <Thumbnail
          source={face}
        />
        <p>
          <strong>Face coverings are required </strong>
          for members and guests upon entry
          <Tooltip>
            <div className="covid-icon">
              <Icon
                source={CircleInformationMajor}
              />
            </div>
          </Tooltip>
        </p>
      </div>
      <div className="social-distance">
        <Thumbnail
          source={distance}
        />
        <p>
          <strong>Allow at least 6 feet of space </strong>
          between you and other customers
          <Tooltip>
            <div className="covid-icon">
              <Icon
                source={CircleInformationMajor}
              />
            </div>
          </Tooltip>
        </p>
      </div>
      <div className="reusable-bag">
        <Thumbnail
          source={shopping}
        />
        <p>
          <strong>Reusable shopping bags </strong>
          are allowed as long as members pack the bags themselves
          <Tooltip>
            <div className="covid-icon">
              <Icon
                source={CircleInformationMajor}
              />
            </div>
          </Tooltip>
        </p>
      </div>
      <div className="shopping">
        <Button primary onClick={toNextScreen}>I Understand</Button>
      </div>
    </div>
  );
}

Covid.propTypes = {
  setShowShopModeProp: PropTypes.func.isRequired,
  setShowCovidProp: PropTypes.func.isRequired,
};

export default Covid;
