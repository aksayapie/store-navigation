import React, { useState } from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import Welcome from '../welcomePage/Welcome';
import ShopMode from '../shopMode/ShopMode';
import './FlowContainer.scss';

function FlowContainer() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showShopMode, setShowShopMode] = useState(false);
  // const [lastPage, setLastPage] = useState('Welcome');

  const handleExClick = () => {
    console.log('ex click');
  };

  const handleBackClick = () => {
    console.log('back click');
  };

  return (
    <div className="flow-container">
      <div className="icon-container">
        <div className="flow-back">
          {showWelcome ? null : <FaArrowLeft className="back-icon" onClick={handleBackClick} />}
        </div>
        <div className="flow-ex">
          <FaTimes className="ex-icon" onClick={handleExClick} />
        </div>
      </div>
      {/* for hiding and showing, using this stack overflow format that seems up to date
      https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react */}
      {showWelcome ? (
        <Welcome
          setShowWelcomeProp={setShowWelcome}
          setShowShopModeProp={setShowShopMode}
        />
      ) : null }
      {showShopMode ? (
        <ShopMode
          style={{ visibility: showShopMode }}
          setShowShopModeProp={setShowShopMode}
        />
      ) : null }
    </div>
  );
}

export default FlowContainer;
