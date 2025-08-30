import React, { useEffect, useState } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { client } from "../../sanity";
import "./t.css";

const Acc = () => {
  const [accommodations, setAccommodations] = useState([]);
  const [defaultTab, setDefaultTab] = useState("");

  useEffect(() => {
    client
      .fetch(`*[_type == "accommodation"] | order(location asc)`)
      .then((data) => {
        setAccommodations(data);
        if (data.length > 0) setDefaultTab(data[0].location.toLowerCase());
      })
      .catch(console.error);
  }, []);

  if (!accommodations.length) return <p>Loading accommodation...</p>;

  return (
    <div className="it">
      <img src="https://i.imgur.com/T8zWy9q.png" alt="" className="it_top" />
      <h1 className="title">Accommodation</h1>
      <Tabs defaultValue={defaultTab} className="sam">
        <TabsList className="tabs">
          {accommodations.map((item) => (
            <TabsTrigger
              key={item._id}
              className="val"
              value={item.location.toLowerCase()}
            >
              {item.location}
            </TabsTrigger>
          ))}
        </TabsList>

        {accommodations.map((item) => (
          <TabsContent
            key={item._id}
            className="saa"
            value={item.location.toLowerCase()}
          >
            <div className="valed">
              <div className="val_sub">
                <h2 className="sawan  ff">{item.dateRange}</h2>
              </div>

              <div className="val_sub">
                <h2 className="sawans">{item.mainHotel?.name}</h2>
                <div className="liner"></div>
                <p className="ven_name san">{item.mainHotel?.description}</p>
                {item.mainHotel?.bookingLink && (
                  <p style={{ marginBottom: "10px" }}>
                    Booking Link:{" "}
                    <a
                      style={{ textDecoration: "underline" }}
                      href={item.mainHotel.bookingLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="ven_name"
                    >
                      {item.mainHotel.bookingLink}
                    </a>
                  </p>
                )}
                <h2 className="sawans">Other Accommodation Options</h2>
                <div className="liner"></div>
                {item.otherOptions?.length > 0 && (
                  <Accordion className="s v" type="single" collapsible>
                    {item.otherOptions.map((opt, index) => (
                      <AccordionItem
                        key={index}
                        className="c"
                        value={`option-${index}`}
                      >
                        <AccordionTrigger className="hab">
                          {opt.name}
                        </AccordionTrigger>
                        <div className="liner"></div>
                        <AccordionContent className="co">
                          {opt.phone && <p>Phone: {opt.phone}</p>}
                          {opt.website && (
                            <p>
                              Website:{" "}
                              <a
                                href={opt.website}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="ven_name"
                              >
                                {opt.website}
                              </a>
                            </p>
                          )}
                          <br/>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                )}

                {item.rentalHousesInfo && (
                  <div className="top_grid" style={{ marginTop: "1rem" }}>
                    <div className="top_grid_sub">
                      <div className="markup">
                        <h2 className="sawans">Rental Houses</h2>
                      </div>
                      <div className="liner"></div>
                      <p className="ven_name san">{item.rentalHousesInfo}</p>
                    </div>
                  </div>
                )}
              {item.additionalInfo && (
                <div className="top_grid" style={{ marginTop: "1rem" }}>
                  {item.additionalInfo.map((info, index) => (
                    <div className="top_grid_sub" key={index}>
                      <div className="markup">
                        <h2 className="sawans">{info.label}</h2>
                      </div>
                      <div className="liner"></div>
                      <p className="ven_name san">{info.value}</p>
                    </div>
                  ))}
                </div>
              )}
              </div>

              <div className="top_grid" style={{}}></div>

            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default Acc;
