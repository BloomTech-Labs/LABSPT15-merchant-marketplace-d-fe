import React, { useRef, useState } from 'react';
import { Button, Carousel } from 'antd';
import './inventoryStyles.css';
import NewItem from './newItem';
import MoreInfo from './newItem/moreInfo';
import AddPhotos from './newItem/photos';
import Finalize from './newItem/finalize';
import ProgressBar from '../../common/progressBar/progressBar';
import NavBar from '../../common/navBar';

function Inventory(props) {
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
    setNewItemData(completeObject);
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
            <MoreInfo
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

export default Inventory;
