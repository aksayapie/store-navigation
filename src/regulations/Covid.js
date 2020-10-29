import React, {} from 'react';
import { DisplayText, Button } from '@shopify/polaris';

function Covid() {
  return (
    <div>
      <DisplayText size="extraLarge">COVID-19 Policies</DisplayText>
      <DisplayText size="small">
        To protect our members and employees, all Costco members and guests must wear a face
        covering that covers their mouth and nose at all times while at Costco.
      </DisplayText>
      <Button>
        Back
      </Button>
      <Button primary>
        Start Shopping
      </Button>
    </div>
  );
}

export default Covid;
