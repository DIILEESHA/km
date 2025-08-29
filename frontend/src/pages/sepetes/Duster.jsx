import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity";
import "./d.css";
const Duster = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "Spetses"][0]`;
      const data = await client.fetch(query);
      setHeaderData(data);
    };
    fetchData();
  }, []);

  if (!headerData) return <p>Loading...</p>;

  return (
    <div className="header">
      <div className="top">
        <h2 className="header_sm">{headerData.smallTitle}</h2>
        <h1 className="couple_name">{headerData.coupleName}</h1>
        <h3 className="date">{headerData.date}</h3>
      </div>

      {headerData.headerImage && (
        <img
          src={urlFor(headerData.headerImage)
            .width(1200) // request larger size for better resolution
            .height(675) // maintain 16:9 aspect ratio or use actual image dimensions
            .dpr(2) // fetch for retina displays (2x pixel density)
            .auto("format") // serve modern formats like WebP if supported
            .quality(100)
            .url()}
          alt="Wedding Header"
          width="1200" // set display width matching requested size
          height="675" // set display height matching requested size
          className="header_img"
        />
      )}

      <p className="description_paragraph">
        Spetses has the perfect blend of intimacy, charm, and beauty. It is big
        enough to explore, yet small enough to feel personal. Every corner of
        the island feels magical — from sunsets at the Old Harbour to walks
        along the sea. It is a safe, welcoming island where English is widely
        spoken and visitors are warmly looked after.
      </p>
    </div>
  );
};

export default Duster;
