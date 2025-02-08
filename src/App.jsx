import { useState, useEffect } from "react";
import qrcode from "qrcode";
import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [qrCode, setQrcode] = useState("");

  useEffect(() => {
    if (url) {
      qrcode.toDataURL(url, { width: 300, margin: 2 }, (err, qrUrl) => {
        if (err) {
          console.error("QR Code generation failed:", err);
        } else {
          setQrcode(qrUrl);
        }
      });
    } else {
      setQrcode("");
    }
  }, [url]);

  const handleUrlChange = (e) => {
    const value = e.target.value;
    setUrl(value);
  };

  return (
    <>
      <div className="container flex flex-col justify-center items-center space-y-5">
        <h1 className="text-3xl font-extrabold">QR Code</h1>
        <input
          type="text"
          value={url}
          onChange={(e) => {
            handleUrlChange(e);
          }}
          placeholder="Url.."
          className="px-5 py-2 bg-slate-500 rounded-2xl"
        />
        <img
          src={qrCode}
          // alt="Generated QR Code"
          className="qrcode h-[300px] w-[300px] mt-10 rounded-md border-b-blue-400"
        />
      </div>
    </>
  );
}

export default App;
