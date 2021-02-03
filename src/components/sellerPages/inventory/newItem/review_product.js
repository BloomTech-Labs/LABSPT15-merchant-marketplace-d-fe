import React from "react";
import NewProductInfo from "./newProductInfo";
import FormButton from "../../../common/FormButton/FormButton";

function Finalize({
  setProgress,
  slider,
  formConsolidate,
  photo,
  mainInfo,
  specForm
}) {
  const formConfirm = async () => {
    await formConsolidate();
  };

  return (
    <div className="contents">
      <NewProductInfo
        item={""}
        photo={photo}
        mainInfo={mainInfo}
        specForm={specForm}
      />
      <FormButton
        setProgress={setProgress}
        slider={slider}
        progressPercent={100}
        text="Add Product"
        review="true"
        formSubmit={formConfirm}
      />
    </div>
  );
}

export default Finalize;
