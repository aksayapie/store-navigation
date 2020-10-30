import React from 'react';
import { Button, ButtonGroup } from '@shopify/polaris';
import './Covid.scss';

function Covid() {
  return (
    <div className="content">
      <div className="main-text">COVID-19 Policies</div>
      <div className="sub-text">
        To protect our members and employees, all Costco members and guests
        must wear a face covering that covers their mouth and nose at all
        times while at Costco.
      </div>
      {/* <Button>
        <div className="back">Back</div>
      </Button>
      <Button>
        <div className="start">Start Shopping</div>
      </Button> */}
      <ButtonGroup>
        <Button>Back</Button>
        <div className="shopping"><Button>Shopping</Button></div>
      </ButtonGroup>
      {/* <Button>Back</Button>
      <div className="shopping"><Button>Shopping</Button></div> */}
    </div>
  );
}

export default Covid;
