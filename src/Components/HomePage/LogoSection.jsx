
import { img } from "framer-motion/client";
import React from "react";


// Client logos array with company names
const clientLogos = [
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Armand", },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Cornelis Networks" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Emmloans" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "EmpowOR" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "BCG" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Factor4" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "GSA National" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "CultureWise" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Western Union" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "Imedview" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "GSL" },
  { logo: "https://i.postimg.cc/3rbBwBbF/Google-Icons-09-512.webp", name: "GPSN" },
];

const LogoSection = () => {
  // Split logos into two groups
  const firstSet = clientLogos.slice(0, 6);
  const secondSet = clientLogos.slice(6);

  return (
    <div className="py-2 bg-gray-100"style={{ background: "linear-gradient(to right, #FFD700, #333333)"}}>
      <div className="max-w-7xl mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-roboto text-black mb-8"  style={{
                    background: "linear-gradient(to right, #FFD700, #333333)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                  }}>
          Our Clients
        </h2>
        {/* Scrolling Logo Container */}
        <div className="overflow-hidden relative">
          <div className="flex animate-scroll gap-12">
            {/* First Section */}
            <div className="flex-shrink-0 flex gap-12">
              {firstSet.map((client, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <img
                    src={client.logo}
                    alt={`Client Logo ${index}`}
                    className="w-32 h-auto mx-auto"
                  />
                  {/* <p className="text-sm text-gray-600 mt-2">{client.name}</p> */}
                </div>
              ))}
            </div>

            {/* Second Section */}
            <div className="flex-shrink-0 flex gap-12">
              {secondSet.map((client, index) => (
                <div key={index} className="flex-shrink-0 text-center">
                  <img
                    src={client.logo}
                    alt={`Client Logo ${index + 6}`}
                    className="w-32 h-auto mx-auto"
                  />
                  {/* <p className="text-sm text-gray-600 mt-2">{client.name}</p> */}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LogoSection;
