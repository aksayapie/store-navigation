import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import {
  Modal, Stack, ChoiceList, Button,
} from '@shopify/polaris';

//  much of this code was taken from the shopify polaris website
//  where they give code for the modal component
function LocationSelect({ updateStoreProp, storeNameProp }) {
  const CHICAGO = ' Chicago Clybourne';
  const BROOKLYN = ' Brooklyn';
  const SANFRANCISCO = ' San Francisco';
  const HOUSTON = ' Houston';
  const BOSTON = ' Boston';
  const [active, setActive] = useState(false);
  const [selectedCity, setSelectedCity] = useState('');
  const handleModalChange = useCallback(() => setActive(!active), [active]);
  const handleSelectedCity = useCallback(
    (value) => {
      updateStoreProp(value);
      setSelectedCity(value);
    },
    [],
  );
  const handleClose = () => {
    handleModalChange();
    updateStoreProp(storeNameProp);
  };
  const activator = <Button onClick={handleModalChange} plain>Change Location</Button>;
  return (
    <div style={{ height: '500px' }}>
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

LocationSelect.propTypes = {
  updateStoreProp: PropTypes.func.isRequired,
  storeNameProp: PropTypes.string.isRequired,
};

export default LocationSelect;
