import React, { useEffect, useState } from "react";
import { client, urlFor } from "../../sanity";
import "./header.css";
import header from "../../assets/header.png"

const Header = () => {
  const [headerData, setHeaderData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const query = `*[_type == "header"][0]`;
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
                .dpr(1) // fetch for retina displays (2x pixel density)
                .auto("format") // serve modern formats like WebP if supported
                .quality(100)
                .url()}
              alt="Wedding Header"
              width="1200" // set display width matching requested size
              height="675" // set display height matching requested size
              className="header_img"
            />
          )}
    </div>
  );
};

export default Header;
