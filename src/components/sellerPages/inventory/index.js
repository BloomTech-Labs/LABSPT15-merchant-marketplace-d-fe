import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import './inventoryStyles.css';
import NewItem from './newItem/main_info';
import Specifications from './newItem/specifications';
import AddPhotos from './newItem/photos';
import Finalize from './newItem/review_product';
import ProgressBar from '../../common/progressBar/progressBar';
import NavBar from '../../common/navBar';
import { addProduct } from '../../../state/actions/index';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';

function Inventory({ status, addProduct }) {
  const { authState } = useOktaAuth();

  // State for each form section
  const [mainInfo, setMainInfo] = useState({});
  const [specForm, setSpecForm] = useState({});
  const [photos, setPhotos] = useState({});

  const formCosolidate = () => {
    let completeObject = {
      item: {
        ...mainInfo,
        published: true,
      },
      photos: {
        ...photos,
      },
      spec: {
        ...specForm,
      },
    };
    addProduct(completeObject, authState);
  };

  // Progress Bar Sync
  const [progressPoint, setProgressPoint] = useState(1);
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
              setData={setPhotos}
            />
            <Finalize
              slider={slider}
              setStatus={setProgressStatus}
              setProgress={setProgressPoint}
              formCosolidate={formCosolidate}
              mainInfo={mainInfo}
              specForm={specForm}
              photos={photos}
            />
          </Carousel>
        </div>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  status: state.addProduct.getAddProductStatus, //We could use this status to see the status of the api call post request
});

export default connect(mapStateToProps, { addProduct })(Inventory);
