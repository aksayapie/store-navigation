import React, { useState } from 'react';
import {
  MobileBackArrowMajor, MobileCancelMajor,
} from '@shopify/polaris-icons';
import { Link } from 'react-router-dom';
import { Button, Icon } from '@shopify/polaris';
import Welcome from '../welcomePage/Welcome';
import ShopMode from '../shopMode/ShopMode';
import Covid from '../regulations/Covid';
import Bar from '../progressBar/Bar';
import './FlowContainer.scss';

function FlowContainer() {
  // as of right now these state varibles all reset each time flow
  // container is navigated to
  const [showWelcome, setShowWelcome] = useState(true);
  const [showShopMode, setShowShopMode] = useState(false);
  const [showCovid, setShowCovid] = useState(false);
  const [progBar] = useState(0);

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
          {showWelcome ? null : <Button plain onClick={handleBackClick}><Icon source={MobileBackArrowMajor} className="back-icon" /></Button> }
        </div>
        <Link to="/">
          <Button plain>
            <Icon source={MobileCancelMajor} className="ex-icon" />
          </Button>
        </Link>
      </div>
      {/* updates length of progress bar as we go through the pages */}
      {showWelcome ? (
        <Bar
          setProgBarProp={progBar + 30}
        />
      ) : null }
      {showCovid ? (
        <Bar
          setProgBarProp={progBar + 60}
        />
      ) : null }
      {showShopMode ? (
        <Bar
          setProgBarProp={progBar + 90}
        />
      ) : null }
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
          setShowCovidProp={setShowCovid}
          setShowShopModeProp={setShowShopMode}
        />
      ) : null }
      {/* show Shop Mode screen if boolean is true, otherwise hide it */}
      {showShopMode ? (
        <ShopMode />
      ) : null }
    </div>
  );
}

export default FlowContainer;
