import React from 'react';
import {
  Button,
  Card, Stack,
} from '@shopify/polaris';

export default function ListPageTopBar() {
  return (
    <Card>
      <Stack>
        <p>Delivery Zip Code: 95605</p>
        <br />
        <Button plain>Change</Button>
      </Stack>
    </Card>
  );
}
