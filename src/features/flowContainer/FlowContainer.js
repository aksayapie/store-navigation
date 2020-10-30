import React, { useState } from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import Welcome from '../welcomePage/Welcome';
import ShopMode from '../shopMode/ShopMode';
import Covid from '../regulations/Covid';
import './FlowContainer.scss';

function FlowContainer() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showShopMode, setShowShopMode] = useState(false);
  const [showCovid, setShowCovid] = useState(false);
  // const [lastPage, setLastPage] = useState('Welcome');

  const handleExClick = () => {
    // go back to list page or whatever is before this
    console.log('ex click');
  };

  const handleBackClick = () => {
    if (showCovid === true) {
      setShowCovid(false);
      setShowWelcome(true);
    } else {
      setShowShopMode(false);
      setShowCovid(true);
    }
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
      {/* show welcome screen if boolean is true, otherwise hide it */}
      {showWelcome ? (
        <Welcome
          setShowWelcomeProp={setShowWelcome}
          setShowCovidProp={setShowCovid}
        />
      ) : null }
      {/* show Covid screen if boolean is true, otherwise hide it */}
      {showCovid ? (
        <Covid
          style={{ visibility: showShopMode }}
          setShowCovidProp={setShowCovid}
          setShowShopModeProp={setShowShopMode}
        />
      ) : null }
      {/* show Shop Mode screen if boolean is true, otherwise hide it */}
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
