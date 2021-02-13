import React from "react";
import NewProductInfo from "./newProductInfo";
import FormButton from "../../../common/FormButton/FormButton";

function Finalize({
  setProgress,
  slider,
  formConsolidate,
  mainInfo,
  tagsText,
  photo,
  setPublished
}) {
  const formConfirm = async () => {
    await formConsolidate();
  };

  return (
    <div className="contents">
      <NewProductInfo
        photo={photo}
        mainInfo={mainInfo}
        tagsText={tagsText}
        setPublished={setPublished}
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
