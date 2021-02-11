import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import './inventoryStyles.css';
import NewItem from './newItem/main_info';
import Specifications from './newItem/specifications';
import AddPhotos from './newItem/photos';
import Finalize from './newItem/review_product';
import ProgressBar from '../../common/progressBar/progressBar';
import NavBar from '../../common/navBar';
import { addProduct, addItemImage } from '../../../state/actions/index';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

function Inventory({ addProduct, addItemImage }) {
  const { authState } = useOktaAuth();

  // State for each form section
  const [mainInfo, setMainInfo] = useState({});
  const [specForm, setSpecForm] = useState({});
  const [photo, setPhoto] = useState(
    'http://superprosamui.com/2016/wp-content/plugins/ap_background/images/default/default_large.png'
  );
  const [published, setPublished] = useState(true);

  const formConsolidate = async () => {
    let completeObject = {
      item: {
        ...mainInfo,
        published,
      },
      spec: {
        ...specForm,
      },
    };

    addProduct(completeObject, authState).then(response => {
      addItemImage(authState, response.id, photo);
    });
  };

  // Progress Bar Sync
  const [progressPoint, setProgressPoint] = useState(0);
  const [progressStatus, setProgressStatus] = useState('active');

  // Form Pointer for antD
  const slider = useRef(null);

  return (
    <>
      <NavBar />
      <div className="outerContainer">
        <div className="formContainer">
          <ProgressBar percent={progressPoint} status={progressStatus} />
          <Carousel ref={slider}>
            <NewItem
              slider={slider}
              setData={setMainInfo}
              setProgress={setProgressPoint}
            />
            <Specifications
              slider={slider}
              setData={setSpecForm}
              setProgress={setProgressPoint}
            />
            <AddPhotos
              slider={slider}
              setProgress={setProgressPoint}
              setPhoto={setPhoto}
            />
            <Finalize
              slider={slider}
              setStatus={setProgressStatus}
              setProgress={setProgressPoint}
              formConsolidate={formConsolidate}
              mainInfo={mainInfo}
              specForm={specForm}
              photo={photo}
              setPublished={setPublished}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}

export default connect(null, { addProduct, addItemImage })(Inventory);
