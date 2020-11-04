import React, { useCallback } from 'react';
import Modal from 'react-modal';
import PropTypes from 'prop-types';
import AutoCompleteSearchField from './AutoCompleteSearchField';

function SearchModal({ activeSearchModal, setActiveSearchModal }) {
  const handleChange = useCallback(() => setActiveSearchModal(!activeSearchModal),
    [activeSearchModal]);
  // const addItemsToCard = console.log('sendItemArray');
  return (
    <div>
      <Modal
        isOpen={activeSearchModal}
        onRequestClose={handleChange}
        style={{
          overlay: {
            zIndex: 3,
            backgroundColor: 'rgba(134,134,134,0.4)',
          },
          content: {
            bottom: '10%',
            top: 'auto',
            fontSize: '1.4em',
            lineHeight: '28px',
          },
        }}
      >
        <div key="searchInput">
          <AutoCompleteSearchField handleCloseProp={handleChange} />
        </div>
      </Modal>
    </div>
  );
}
SearchModal.propTypes = {
  activeSearchModal: PropTypes.bool.isRequired,
  setActiveSearchModal: PropTypes.func.isRequired,
};

export default SearchModal;
