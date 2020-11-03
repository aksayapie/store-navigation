import React, { useState, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import {
  Modal, Stack, ChoiceList, Button,
} from '@shopify/polaris';
import './Welcome.scss';
import { updateLocation } from './locationSelectSlice';

//  much of this code was taken from the shopify polaris website
//  where they give code for the modal component
function LocationSelect() {
  // city options
  const CHICAGO = ' Chicago Clybourne';
  const BROOKLYN = ' Brooklyn';
  const SANFRANCISCO = ' San Francisco';
  const HOUSTON = ' Houston';
  const BOSTON = ' Boston';

  const [active, setActive] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const handleModalChange = useCallback(() => setActive(!active), [active]);

  const dispatch = useDispatch();

  //  update selected city within function for radio buttons to work properly and
  //  update selected city in redux
  const handleSelectedCity = useCallback(
    (value) => {
      setSelectedCity(value);
      dispatch(updateLocation(value[0]));
    },
    [],
  );
  const handleClose = () => {
    handleModalChange();
  };

  //  this is the actual button that is clicked to open the modal
  const activator = <Button onClick={handleModalChange} plain>Change Location</Button>;
  return (
    <div>
      <Modal
        activator={activator}
        open={active}
        onClose={handleClose}
        title="Choose Your Store"
        primaryAction={{
          content: 'Done',
          onAction: handleClose,
        }}
      >
        <Modal.Section>
          <Stack vertical>
            <Stack.Item>
              <ChoiceList
                title="Stores:"
                choices={[
                  { label: 'Chicago', value: CHICAGO },
                  { label: 'Brooklyn', value: BROOKLYN },
                  { label: 'San Francisco', value: SANFRANCISCO },
                  { label: 'Houston', value: HOUSTON },
                  { label: 'Boston', value: BOSTON },
                ]}
                selected={selectedCity}
                onChange={handleSelectedCity}
              />
            </Stack.Item>
          </Stack>
        </Modal.Section>
      </Modal>
    </div>
  );
}

export default LocationSelect;
