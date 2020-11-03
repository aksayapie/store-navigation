import React from 'react';
import {
  Icon, Button, Card,
} from '@shopify/polaris';
import {
  MobileHamburgerMajor, ProfileMajor,
} from '@shopify/polaris-icons';
import costco from './costco.png';
import './mainNavBar.scss';

function MainNavBar() {
  return (
    <div className="nav-bar">
      <Card>
        <div className="hamburger-menu">
          <Button primary>
            <Icon source={MobileHamburgerMajor} />
          </Button>
        </div>
        <div className="costco-img">
          <img src={costco} alt="Costco Logo" height={30} width={104.18} />
        </div>
        <div className="account-img">
          <Button plain>
            <Icon source={ProfileMajor} />
            <p>My Account</p>
          </Button>
        </div>
      </Card>
    </div>
  );
}

export default MainNavBar;
