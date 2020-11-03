import React from 'react';
import { Button, Card, Stack } from '@shopify/polaris';
import './ShoppingList.scss';

export default function ListPageTopBar() {
  return (
    <div className="list-top-bar">
      <Card>
        <Stack>
          <p>Delivery Zip Code: 95605</p>
          <br />
          <Button plain>Change</Button>
        </Stack>
      </Card>
    </div>
  );
}
