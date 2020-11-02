import React, { useEffect, useState } from 'react';
import { BrowserMultiFormatReader, BrowserCodeReader } from '@zxing/browser';
import { AiOutlineClose } from 'react-icons/ai';
import './ScanPage.scss';

const ScanPage = () => {
  const [code, setCode] = useState(null);
  useEffect(() => {
    const scanBarcode = async () => {
      const codeReader = new BrowserMultiFormatReader();
      const videoInputDevices = await BrowserCodeReader.listVideoInputDevices();

      // choose your media device (webcam, frontal camera, back camera, etc.)
      const selectedDeviceId = videoInputDevices[0].deviceId;

      const previewElem = document.querySelector('video');

      // you can use the controls to stop() the scan or switchTorch() if available
      await codeReader.decodeFromVideoDevice(
        selectedDeviceId,
        previewElem,
        (result, _error, controls) => {
          // use the result and error values to choose your actions
          // you can also use controls API in this scope like the controls
          // returned from the method.
          if (result) {
            setCode(result.text);
            controls.stop();
          }
        },
      );
    };

    scanBarcode();
  }, []);

  return (
    <div className="video-container">
      <video id="video" style={{ border: '1px solid gray' }} />
      <div className="rectangle-4" />
      <div className="info">
        <div className="cancel">
          <AiOutlineClose />
        </div>

        <h1>Scanner</h1>
        <p>Center the viewer over a barcode to add an item to your list</p>
        <p>{code}</p>
      </div>
    </div>
  );
};

export default ScanPage;
