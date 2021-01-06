import React from 'react';
import { connect } from 'react-redux';
import { useOktaAuth } from '@okta/okta-react';
import { Widget } from '@uploadcare/react-widget';
import uploadcare from 'uploadcare-widget';
import { addItemImage } from '../../state/actions/index';

function TestItemImageUpload({ addItemImage }) {
  const { authState } = useOktaAuth();

  // Callback that runs when the file is successfully uploaded
  function onChange(fileInfo) {
    console.log('fileinfo: ', fileInfo);
    addItemImage(authState, 1, fileInfo.originalUrl);
  }

  function openUploadDialog(e) {
    console.log('clicked the custom upload button');
    let dialog = uploadcare.openDialog(null, {
      publicKey: '7f074009b333b2d5be63',
      imagesOnly: true,
    });
    dialog.done(function(file, fileGroup, list) {
      file.promise().done(function(fileInfo) {
        console.log('fileinfo: ', fileInfo);
        addItemImage(authState, 1, fileInfo.originalUrl);
      });
    });
  }

  // The upload button itself. Very simple, with a lot of config options
  // Docs: https://github.com/uploadcare/react-widget
  // publicKey is just the id for the project where the files are being uplaoded
  return (
    <>
      <Widget
        onChange={onChange}
        publicKey="7f074009b333b2d5be63"
        clearable
        data-images-only
      />
      <div className="test-upload" onClick={openUploadDialog}>
        Test upload
      </div>
    </>
  );
}

export default connect(null, { addItemImage })(TestItemImageUpload);
