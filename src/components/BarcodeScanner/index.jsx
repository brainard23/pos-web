import React, { useEffect, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";

const BarcodeScanner = ({ getData }) => {
  const [scanResult, setScanResult] = useState(null);
  const [manualSerialNumber, setManualSerialNumber] = useState("");

  useEffect(() => {
    const scanner = new Html5QrcodeScanner("reader", {
      qrbox: {
        width: 400,
        height: 400,
      },
      fps: 5,
    });

    let isScanning = true;

    scanner.render(success);

    function success(result) {
      if (isScanning) {
        scanner.clear();
        setScanResult(result);
        isScanning = false;
      }
    }
  }, []);
  function handleManualSerialNumberChange(event) {
    setManualSerialNumber(event.target.value);
  }

  if (scanResult) {
    getData(scanResult);
  }

  return (
    <div >
      {scanResult ? <h1 className="text-green-600">barcode scanned</h1> : <h1>Barcode Scanner</h1>}
      <div>
        <div id="reader" />
        <div className="center-input">
          <input
            type="text"
            value={manualSerialNumber}
            onChange={handleManualSerialNumberChange}
          />
          {manualSerialNumber && (
            <p>Serial Number: {manualSerialNumber.slice(-16)}</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default BarcodeScanner;
