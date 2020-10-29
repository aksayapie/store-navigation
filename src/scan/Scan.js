import React, { useEffect, useState } from 'react';
import { BrowserMultiFormatReader, BrowserCodeReader } from '@zxing/browser';

function Scan() {
  const [code, setCode] = useState(null);
  useEffect(() => {
    async function Scanbarcode() {
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
    }

    Scanbarcode();
  });

  return (
    <div>
      <video id="video" width="300" height="200" style={{ border: '1px solid gray' }} />
      <br />
      code =
      {' '}
      {code}
    </div>
  );
}

export default Scan;
