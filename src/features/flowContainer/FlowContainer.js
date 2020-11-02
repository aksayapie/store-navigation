import React, { useState } from 'react';
import { FaTimes, FaArrowLeft } from 'react-icons/fa';
import { Button } from '@shopify/polaris';
import Welcome from '../welcomePage/Welcome';
import ShopMode from '../shopMode/ShopMode';
import Covid from '../regulations/Covid';
import './FlowContainer.scss';

function FlowContainer() {
  const [showWelcome, setShowWelcome] = useState(true);
  const [showShopMode, setShowShopMode] = useState(false);
  const [showCovid, setShowCovid] = useState(false);
  const [shopMode, setshopMode] = useState('');
  const [storeName, setStoreName] = useState(' Chicago Clybourne');

  const handleExClick = () => {
    // go back to list page or whatever is before this
    console.log('ex click');
    //  just for right now making sure shopMode is set correctly
    console.log(shopMode);
  };

  //  hides current page and shows previous page
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
          {/* hide back button on first page-- welcome page, then show for rest of pages */}
          {showWelcome ? null : <Button plain onClick={handleBackClick}><FaArrowLeft className="back-icon" /></Button> }
        </div>
        <Button plain onClick={handleExClick}>
          <FaTimes className="ex-icon" />
        </Button>
      </div>
      {/* for hiding and showing, using this stack overflow format that seems up to date
      https://stackoverflow.com/questions/24502898/show-or-hide-element-in-react */}
      {/* show welcome screen if boolean is true, otherwise hide it */}
      {showWelcome ? (
        <Welcome
          setShowWelcomeProp={setShowWelcome}
          setShowCovidProp={setShowCovid}
          storeNameProp={storeName}
          setStoreNameProp={setStoreName}
        />
      ) : null }
      {/* show Covid screen if boolean is true, otherwise hide it */}
      {showCovid ? (
        <Covid
          setShowCovidProp={setShowCovid}
          setShowShopModeProp={setShowShopMode}
        />
      ) : null }
      {/* show Shop Mode screen if boolean is true, otherwise hide it */}
      {showShopMode ? (
        <ShopMode
          setShopModeProp={setshopMode}
        />
      ) : null }
    </div>
  );
}

export default FlowContainer;
