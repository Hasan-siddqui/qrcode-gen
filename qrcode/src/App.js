import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [temp, setTemp] = useState("");
  const [word, setWord] = useState("");
  const [size, setSize] = useState(400);
  const [bgColor, setBgColor] = useState("ffffff");
  const [qrColor, setQrColor] = useState("000000"); // New state for QR code color
  const [qrCode, setQrCode] = useState("");

  // Changing the URL only when the user
  // changes the input
  useEffect(() => {
    setQrCode(
      `http://api.qrserver.com/v1/create-qr-code/?data=${word}!&size=${size}x${size}&bgcolor=${bgColor}&color=${qrColor}`
    );
  }, [word, size, bgColor, qrColor]);

  // Updating the input word when user
  // click on the generate button
  function handleClick() {
    setWord(temp);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div className="input-box">
        <div className="gen">
          <input
            type="text"
            onChange={(e) => setTemp(e.target.value)}
            placeholder="Enter text to encode"
          />
          <button className="button" onClick={handleClick}>
            Generate
          </button>
        </div>
        <div className="extra">
          <div className="bg-color">
            <h5>QR Background Color:</h5>
            <input
              type="color"
              onChange={(e) => setBgColor(e.target.value.substring(1))}
            />
          </div>
          <div className="bg-color">
          <h5>QR Code Color:</h5>
          <input
            type="color"
            onChange={(e) => setQrColor(e.target.value.substring(1))}
          />
          </div>
          <h5 className='size'>QR Dimension:</h5>
          <input
            type="range"
            min="200"
            max="600"
            value={size}
            onChange={(e) => setSize(e.target.value)}
          />
        </div>
      </div>
      <div className="output-box">
        <img src={qrCode} alt="QR Code" />
        <a href={qrCode} download="QRCode">
          <button type="button">Download</button>
        </a>
      </div>
    </div>
  );
}

export default App;
