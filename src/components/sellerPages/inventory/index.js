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
  // Final Data State
  const [newItemData, setNewItemData] = useState({});

  // State for each form section
  const [form1, setForm1] = useState({});
  const [form2, setForm2] = useState({});
  const [form3, setForm3] = useState({});
  const [form4, setForm4] = useState({});

  const formCosolidate = () => {
    let completeObject = {
      ...form1,
      ...form2,
      ...form3,
      ...form4,
    };
    setNewItemData(completeObject); //// I will review this later, I dont think we need a state here, we can just pass the object to the addProduct action-Pedro
    addProduct(newItemData, authState);
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
              setData={setForm1}
              setProgress={setProgressPoint}
            />
            <Specifications
              slider={slider}
              setData={setForm2}
              setProgress={setProgressPoint}
            />
            <AddPhotos
              slider={slider}
              setProgress={setProgressPoint}
              setData={setForm3}
            />
            <Finalize
              slider={slider}
              setData={setForm4}
              setStatus={setProgressStatus}
              setProgress={setProgressPoint}
              product={form1}
              formCosolidate={formCosolidate}
            />
          </Carousel>
        </div>

        <Button
          onClick={() => {
            console.log(form1);
            console.log(form2);
            console.log(form3);
            console.log(form4);
            console.log('final object:', newItemData);
          }}
        >
          Console Log
        </Button>
      </div>
    </>
  );
}
const mapStateToProps = state => ({
  status: state.addProduct.getAddProductStatus, //We could use this status to see the status of the api call post request
});

export default connect(mapStateToProps, { addProduct })(Inventory);
