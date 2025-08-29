// import React, { useState } from "react";
// import BarcodeScanner from "react-qr-barcode-scanner";
// import { useNavigate } from "react-router-dom";

// export default function QrScannerPage() {
//   const [data, setData] = useState("No result");
//   const navigate = useNavigate();

//   return (
//     <div className="bg-gray-900 text-white min-h-screen flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold text-yellow-400 mb-6">Scan QR Code</h1>
      
//       <div className="w-72 h-72 bg-gray-800 rounded-xl overflow-hidden">
//         <BarcodeScanner
//           width={288}  // 72 * 4 for px
//           height={288}
//           onUpdate={(err, result) => {
//             if (result) {
//               setData(result.text);
//               // Example: redirect based on scanned text
//               if (result.text.includes("clothes")) {
//                 navigate("/clothes");
//               }
//             } else {
//               setData("No result");
//             }
//           }}
//         />
//       </div>

//       <p className="mt-4 text-gray-300">Scanned Data: {data}</p>
//     </div>
//   );
// }
